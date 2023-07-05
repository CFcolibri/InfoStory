import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuExpanded: boolean = false;
  animateInfoStories: boolean = false;

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.animateInfoStories = false;
    setTimeout(() => {
      this.animateInfoStories = !this.animateInfoStories;
    }, 300);
  }
}
