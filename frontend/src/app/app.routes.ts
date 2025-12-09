import { Routes } from '@angular/router';

// se quiser importar direto:
// import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    // 👇 forma recomendada p/ standalone component (seu `login.ts`)
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent),

    // Se você tiver exportado como classe normal e quiser importar em cima:
    // component: LoginComponent,
  },
  // outras rotas...
];
