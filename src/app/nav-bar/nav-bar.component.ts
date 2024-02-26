import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  viewChild,
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
/**
 * @title Nested menu
 */
@Component({
  selector: 'menu-navbar',
  templateUrl: 'nav-bar.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export class navBar implements AfterViewInit {
  toggleShow: boolean = false;
  @ViewChild('toggle', { read: ElementRef }) toggle: ElementRef;
  /**
   *
   */
  constructor(toggle: ElementRef) {
    this.toggle = toggle;
  }
  ngAfterViewInit(): void {
    console.log(this.toggle);
    this.clickEvent;
  }
  clickEvent() {
    console.log(this.toggleShow);
    console.log(this.toggle);

    this.toggleShow = !this.toggleShow;
  }
  private breakpointObserver = Inject(BreakpointObserver);
}
