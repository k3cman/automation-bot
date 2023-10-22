import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, Subject, takeUntil, tap} from "rxjs";
import {preventAll, removeHelperClasses} from "../features/bot/utils/element-selector.helpers";

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

        window.removeEventListener('click', preventAll, true)
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
      console.log(selectedElement)
      this.renderer2.addClass(selectedElement, 'selected-sub-element')
      this.selectedSubElement.next(selectedElement)

      window.removeEventListener('click', preventAll, true)
    })

  }

  finish() {
    console.log(this.selectedElements.getValue())
    console.log(this.selectedSubElement.getValue())

    const parent = document.querySelector('.selected-element') as Element;

    const parentsTagName:string = parent.tagName;
    const parentsClasses = parent.className.replace('hover-border-child','')
      .replace('selected-sub-element','')
      .replace('hover-border', '')
      .replace('selected-element', '')
      .trim()

    const parentId = parent.id

    let parentSelector = parentsTagName.toLowerCase()
    if(parentsClasses && parentsClasses !== ''){
      const selectors = parentsClasses.replaceAll(' ', '.')
      parentSelector += ('.' + parentsClasses)
    }

    if(parentId){
      parentSelector += '#'+parentId
    }

    const child = document.querySelector('.selected-sub-element') as Element
    const childTagName = child.tagName;
    const childClasses = child.className.replace('hover-border-child','')
      .replace('selected-sub-element','')
      .replace('hover-border', '')
      .replace('selected-element', '')
      .trim()

    const childId = child.id

    let childSelector = childTagName.toLowerCase()
    if(childClasses && childClasses !== ''){
      const selectors = childClasses.replaceAll(' ', '.')
      childSelector += ('.' + childClasses)
    }

    if(childId){
      childSelector += '#'+childId
    }


    const elements = document.querySelectorAll(parentSelector + ' > ' + childSelector)


    removeHelperClasses()
    debugger


    // const els = document.querySelectorAll(`${parentsTagName[0].toLowerCase()} > ${childrenTagName[0].toLowerCase()}`)
    //
    // els.forEach(el => {
    //   el.setAttribute('value', 'NEMANJA')
    // })
    // console.log(els)
    // // console.lo


    // const allParents = document.querySelectorAll('selected-element');
    // const allChildren =
    //
    // const inputs = document.querySelectorAll('.selected-element > .btn')
    // inputs.forEach((el:any) => {
    //   el.click()
    // })
  }

}
