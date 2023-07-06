import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoStories';

  constructor(private router: Router) { }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
