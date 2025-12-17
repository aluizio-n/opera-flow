import { Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: Home
  }
];
