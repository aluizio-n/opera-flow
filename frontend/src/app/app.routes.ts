import { Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'register',
    component: Register
  }
];
