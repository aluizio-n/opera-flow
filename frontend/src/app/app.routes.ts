import { Routes } from '@angular/router';


import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { authGuard } from './core/guards/auth/auth-guard';
import { publicGuard } from './core/guards/public-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    canActivate: [publicGuard]
  },
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: Register
  }
];
