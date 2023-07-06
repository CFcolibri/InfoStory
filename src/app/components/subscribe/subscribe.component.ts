import { Component } from '@angular/core';


@Component({
  selector: 'app-subscibe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  email: string = '';
  isClicked: boolean = false;

  clearInput(): void {
    this.email = '';
  }

  onButtonClick(): void {
    this.isClicked = true;

    // Reset the 'clicked' class after the animation ends
    setTimeout(() => {
      this.isClicked = false;
    }, 1000); // Same duration as the animation
  }
}





