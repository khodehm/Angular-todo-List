import { Component } from '@angular/core';

@Component({
  selector: 'app-calender-main-page',
  standalone: true,
  imports: [],
  templateUrl: './calender-main-page.component.html',
  styleUrl: './calender-main-page.component.css',
})
export class CalenderMainPageComponent {
  toggleMenu = false;
  hidden = 'hidden';
  menuEvent() {
    console.log(this.toggleMenu);
    this.toggleMenu = !this.toggleMenu;
  }
  toggleVisibilty() {
    this.hidden = this.hidden = 'visible';
    console.log(this.hidden);
  }
}
