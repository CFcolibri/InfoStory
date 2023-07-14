import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customCursor]'
})
export class CustomCursorDirective {
  private circleCursor: HTMLElement | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.circleCursor = this.renderer.createElement('div');
    this.renderer.addClass(this.circleCursor, 'circle-cursor');
    this.renderer.appendChild(document.body, this.circleCursor);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.renderer.setStyle(this.circleCursor, 'transform', `translate(${x}px, ${y}px)`);
  }
}
