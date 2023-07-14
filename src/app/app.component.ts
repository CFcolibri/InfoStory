import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoStories';
  isNavLinkActive: boolean = false;

  cursorX!: number;
  cursorY!: number;

  isHoveringHeaderNavLinks: boolean = false;

  constructor(private router: Router) { }

  updateCursorPosition(event: MouseEvent) {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  onHeaderMouseEnter() {
    this.isHoveringHeaderNavLinks = false;
  }

  onHeaderMouseLeave() {
    this.isHoveringHeaderNavLinks = false;
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
