import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'app',
    component: AppComponent,
    children: [{ path: 'form', component: FormComponent }],
  },
];
