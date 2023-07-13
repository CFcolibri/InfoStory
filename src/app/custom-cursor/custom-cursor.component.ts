import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';


@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.css']
})
export class CustomCursorComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const circle = document.querySelector('.circle') as HTMLElement;
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
  }
}


