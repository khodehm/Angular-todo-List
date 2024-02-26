import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form.component';
import { TodoComponent } from './todo/todo.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
  },
  { path: '', redirectTo: 'home' },
  { path: '*', redirectTo: 'home' },
];
