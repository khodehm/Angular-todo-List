import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormComponent } from './form-component/form.component';
import { FormsModule } from '@angular/forms';
import { navBar } from './nav-bar/nav-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormComponent, FormsModule, navBar],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
})
export class AppComponent {}
