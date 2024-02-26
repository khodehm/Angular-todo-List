import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
export class navBar {}
