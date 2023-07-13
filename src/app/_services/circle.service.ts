import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CircleService {
  private isHeaderHoveringSubject = new BehaviorSubject<boolean>(false);
  isHeaderHovering$ = this.isHeaderHoveringSubject.asObservable();

  setHeaderHovering(isHovering: boolean) {
    this.isHeaderHoveringSubject.next(isHovering);
  }
}
