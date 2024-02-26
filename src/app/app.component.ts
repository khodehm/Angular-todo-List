import { Component } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormComponent } from './form-component/form.component';
import { FormsModule } from '@angular/forms';
import { navBar } from './nav-bar/nav-bar.component';
import { notFound } from './404/404.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormComponent, FormsModule, navBar],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
})
export class AppComponent {
  //https://angular-todo-list.vercel.app/
  /**
   *
   */
}
