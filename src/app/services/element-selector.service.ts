import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, Subject, takeUntil, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ElementSelectorService {
  destroy$ = new Subject<void>()
  mouseMove$!: Observable<MouseEvent>;
  mouseClick$!: Observable<any>;
  private currentElement: EventTarget | null = null;
  private selectedElements = new BehaviorSubject<EventTarget[]>([])
  private loopMode = new BehaviorSubject<'INPUT' | 'BUTTON' | null>(null)
  selectedElements$ = this.selectedElements.asObservable().pipe(
    tap((val) => {
      console.log((val as any).tagName)
      if(val.length >= 2){
        this.destroy$.next()
        this.destroy$.complete()
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
    this.mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
      takeUntil(this.destroy$)
    );
    this.mouseClick$ = fromEvent(document, 'click').pipe(
      takeUntil(this.destroy$)
    );

    setTimeout(() => {

      this.listenToMouseClick()
      this.listenToMouseMove()
    })

    fromEvent(document, 'click').subscribe(event => {
      event.preventDefault()
      event.stopPropagation()
    })

    this.selectedElements.next([])
  }

  private listenToMouseClick(){
    this.mouseClick$.subscribe(data => {
      console.log(data);
      this.selectedElements.next([...this.selectedElements.getValue(), data.target as EventTarget])
      this.renderer2.addClass(data.target, 'selected-element')
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

    // window.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   e.stopImmediatePropagation();
    //   e.preventDefault();
    // }, true)

    let currentElement:EventTarget;
    let selectedElement:EventTarget ;
    fromEvent(this.selectedElements.getValue()[0], 'mousemove').subscribe(data => {
      if(currentElement){
        this.renderer2.removeClass(currentElement, 'hover-border-child')
      }
      currentElement = data.target as EventTarget
      this.renderer2.addClass(data.target, 'hover-border-child')
    })


    fromEvent(this.selectedElements.getValue()[0], 'mousedown').subscribe(event => {

      selectedElement = event.target as any
      console.log(selectedElement)
      this.renderer2.addClass(selectedElement, 'selected-sub-element')
      this.selectedSubElement.next(selectedElement)
    })

  }

  finish() {
    console.log(this.selectedElements.getValue())
    console.log(this.selectedSubElement.getValue())

    const allParents = document.querySelectorAll('.selected-element');
    const allChildren = document.querySelectorAll('.selected-sub-element')

    const parentsTagName:string[] = []
    allParents.forEach(el => parentsTagName.push(el.tagName))

    const childrenTagName:string[] = [];
    allChildren.forEach(el => childrenTagName.push(el.tagName))


    const els = document.querySelectorAll(`${parentsTagName[0].toLowerCase()} > ${childrenTagName[0].toLowerCase()}`)

    els.forEach(el => {
      el.setAttribute('value', 'NEMANJA')
    })
    console.log(els)
    // console.lo


    // const allParents = document.querySelectorAll('selected-element');
    // const allChildren =
    //
    // const inputs = document.querySelectorAll('.selected-element > .btn')
    // inputs.forEach((el:any) => {
    //   el.click()
    // })
  }

}
