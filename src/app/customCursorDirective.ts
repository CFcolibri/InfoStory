
// import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

// @Directive({
//   selector: '[customCursor]'
// })
// export class CustomCursorDirective {
//   private circleCursor: HTMLElement;

//   @Input() cursorSize: string = 'small'; // Default size is small

//   constructor(private elementRef: ElementRef, private renderer: Renderer2) {
//     this.circleCursor = this.renderer.createElement('div');
//     this.renderer.addClass(this.circleCursor, 'circle-cursor');
//     this.renderer.appendChild(this.elementRef.nativeElement, this.circleCursor);
//   }

//   @HostListener('mousemove', ['$event'])
//   onMouseMove(event: MouseEvent) {
//     const x = event.clientX;
//     const y = event.clientY;
//     this.renderer.setStyle(this.circleCursor, 'transform', `translate(${x}px, ${y}px)`);
//   }

//   // Add a lifecycle hook to update the circle cursor size
//   ngOnChanges() {
//     const circleCursorSize = this.cursorSize === 'small' ? '10px' : '20px';
//     this.renderer.setStyle(this.circleCursor, 'width', circleCursorSize);
//     this.renderer.setStyle(this.circleCursor, 'height', circleCursorSize);
//   }
// }

import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[customCursor]'
})
export class CustomCursorDirective {
  private circleCursor: HTMLElement;

  @Input() cursorSize: string = 'small'; // Default size is small

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.circleCursor = this.renderer.createElement('div');
    this.renderer.addClass(this.circleCursor, 'circle-cursor');
    this.renderer.appendChild(this.elementRef.nativeElement, this.circleCursor);
  }

  private updateCircleCursorSize(size: string) {
    const circleCursorSize = size === 'big' ? '20px' : '10px';
    this.renderer.setStyle(this.circleCursor, 'width', circleCursorSize);
    this.renderer.setStyle(this.circleCursor, 'height', circleCursorSize);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.renderer.setStyle(this.circleCursor, 'transform', `translate(${x}px, ${y}px)`);
  }

  ngOnChanges() {
    this.updateCircleCursorSize(this.cursorSize);
  }
}



