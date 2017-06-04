import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isVisible = true;
  numberOfClicks = 0;

  clicks = [];

  buttonClick() {
    this.isVisible = !this.isVisible;
    this.numberOfClicks++;
    this.clicks.push(new Date());
  }

}
