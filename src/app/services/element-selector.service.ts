import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, Subject, takeUntil, tap} from "rxjs";
import {
  compareTwoNodes,
  createSelector,
  preventAll,
  removeHelperClasses
} from "../features/bot/utils/element-selector.helpers";

@Injectable({
  providedIn: 'root'
})
export class ElementSelectorService {
  destroy$ = new Subject<void>()
  mouseMove$!: Observable<MouseEvent>;
  mouseClick$!: Observable<any>;
  private currentElement: EventTarget | null = null;
  private loopMode = new BehaviorSubject<'INPUT' | 'BUTTON' | null>(null)
  loopMode$ = this.loopMode.asObservable();
  private selectedElements = new BehaviorSubject<EventTarget[]>([])
  selectedElements$ = this.selectedElements.asObservable().pipe(
    tap((val) => {
      if(val.length >= 2){
      if(compareTwoNodes(Array.from(document.querySelectorAll('.selected-element')))){
        this.destroy$.next()
        this.destroy$.complete()
        window.removeEventListener('click', preventAll, true)
      }else{
        setTimeout(() => {
          removeHelperClasses()
          this.selectedElements.next([])
        })
      }
      }
    })
  )
  private selectedSubElement = new BehaviorSubject<any>(undefined)
  selectedSubElement$ = this.selectedSubElement.asObservable()
  private renderer2!: Renderer2;
  constructor(
    private renderer:RendererFactory2
  ) {
    this.renderer2 = renderer.createRenderer(null, null)
  }

  start():void {
    window.addEventListener('click', preventAll, true)
    const selectable = document.querySelector('#selectable') as Element;
    this.mouseMove$ = fromEvent<MouseEvent>(selectable, 'mousemove').pipe(
      takeUntil(this.destroy$)
    );
    this.mouseClick$ = fromEvent(document, 'mousedown').pipe(
      takeUntil(this.destroy$)
    );

    setTimeout(() => {
      this.listenToMouseClick()
      this.listenToMouseMove()
    })

    this.selectedElements.next([])
  }

  private listenToMouseClick(){
    this.mouseClick$.subscribe(data => {
      this.renderer2.addClass(data.target, 'selected-element')
      this.selectedElements.next([...this.selectedElements.getValue(), data.target as EventTarget])
    })
  }

  private listenToMouseMove() {
    this.mouseMove$
      .subscribe((data:MouseEvent) => {
        if(this.currentElement) {
          this.renderer2.removeClass(this.currentElement, 'hover-border')
        }
        this.currentElement = data.target;
        this.renderer2.addClass(data.target, 'hover-border')
      })
  }

  setLoopMode(input: 'INPUT' | 'BUTTON') {
    this.loopMode.next(input)
  }

  startInElementListening() {

    window.addEventListener('click', preventAll, true)

    let currentElement:EventTarget;
    let selectedElement:EventTarget ;
    fromEvent(this.selectedElements.getValue(), 'mousemove').subscribe(data => {
      if(currentElement){
        this.renderer2.removeClass(currentElement, 'hover-border-child')
      }
      currentElement = data.target as EventTarget
      this.renderer2.addClass(data.target, 'hover-border-child')
    })


    fromEvent(this.selectedElements.getValue(), 'mousedown').subscribe(event => {
      selectedElement = event.target as any
      this.renderer2.addClass(selectedElement, 'selected-sub-element')
      this.selectedSubElement.next(selectedElement)

      window.removeEventListener('click', preventAll, true)
    })

  }

  finish(value = '') {

    const parent = document.querySelector('.selected-element') as Element;
    const parentSelector = createSelector(document.querySelector('.selected-element') as Element);
    const childSelector = createSelector(document.querySelector('.selected-sub-element') as Element)




    const elements = document.querySelectorAll(parentSelector + ' > ' + childSelector)
    if(this.loopMode.getValue() === 'INPUT'){
      elements.forEach(el => el.setAttribute('value', value))
    }else{
      elements.forEach(el => (el as any).click())
    }

    removeHelperClasses()
  }

  restart() {
    removeHelperClasses()
    this.selectedElements.next([])
    this.currentElement = null;
    this.loopMode.next(null)
    this.selectedSubElement.next(undefined)
    this.renderer2 = this.renderer.createRenderer(null, null);
  }
}
