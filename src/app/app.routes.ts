import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { CalenderMainPageComponent } from './calender-main-page/calender-main-page.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
  },
  { path: '*', redirectTo: 'home' },
  { path: 'calender', component: CalenderMainPageComponent },
];
