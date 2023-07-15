import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuExpanded: boolean = false;
  animateInfoStories: boolean = false;

  isNavLinkHovered: { [key: string]: boolean } = {};
  isNavLinkActive: { [key: string]: boolean } = {};
  @Output() mousemove: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() hoverHeaderNavLinks: EventEmitter<boolean> = new EventEmitter<boolean>();

  isHoveringHeader: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.animateInfoStories = false;
    setTimeout(() => {
      this.animateInfoStories = !this.animateInfoStories;
    }, 300);
  }

  onNavLinkHover(id: string) {
    this.isNavLinkHovered[id] = true;
    this.hoverHeaderNavLinks.emit(true);
  }

  onNavLinkLeave(id: string) {
    this.isNavLinkHovered[id] = false;
    this.hoverHeaderNavLinks.emit(false);
  }

  setNavLinkActive(id: string) {
    // Reset all nav-links to inactive state
    Object.keys(this.isNavLinkActive).forEach(key => {
      this.isNavLinkActive[key] = false;
    });
    // Set the clicked nav-link to active state
    this.isNavLinkActive[id] = true;
  }


  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.mousemove.emit(event);
  }

  onHeaderMouseEnter() {
    this.isHoveringHeader = true;
  }

  onHeaderMouseLeave() {
    this.isHoveringHeader = false;
    this.hoverHeaderNavLinks.emit(false);
  }

  isActiveRoute(routePath: string) {
    return this.router.url === routePath;
  }
}
