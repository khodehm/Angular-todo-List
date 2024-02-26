import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { CalenderMainPageComponent } from './calender-main-page/calender-main-page.component';
import { notFound } from './404/404.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calender', component: CalenderMainPageComponent },
  {
    path: 'todo',
    component: TodoComponent,
  },
  { path: '', redirectTo: 'notFound', pathMatch: 'full' },

  { path: '*', component: notFound },
  { path: '**', redirectTo: 'notFound' },
];
