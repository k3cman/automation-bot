import {HostListener, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, fromEvent} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ElementSelectorService {
  mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
  mouseClick$ = fromEvent(document, 'click');
  private currentElement: EventTarget | null = null;
  private selectedElements = new BehaviorSubject<EventTarget[]>([])

  private renderer2!: Renderer2;
  constructor(
    private renderer:RendererFactory2
  ) {
    this.renderer2 = renderer.createRenderer(null, null)
  }

  start():void {
    this.mouseClick$.subscribe(data => {
      this.selectedElements.next([...this.selectedElements.getValue(), data.target as EventTarget])
      this.renderer2.addClass(data.target, 'selected-element')
    })
    this.mouseMove$
      .subscribe((data:MouseEvent) => {
        if(this.currentElement) {
          this.renderer2.removeClass(this.currentElement, 'hover-border')
        }
        this.currentElement = data.target;
        this.renderer2.addClass(data.target, 'hover-border')
      })
  }
}
