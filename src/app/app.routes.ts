import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
  },
  { path: '*', redirectTo: 'home' },
];
