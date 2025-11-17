import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  {
    path: 'admin',
    loadChildren: () => import('./boss/app/app.routes').then(m => m.routes)
  }
  ,
  {
    path: 'agent',
    loadChildren: () => import('./agent/app/app.routes').then(m => m.routes)
  }
  ,
  {
    path: 'owner',
    loadChildren: () => import('./owner/app/app.routes').then(m => m.routes)
  }
  ,
  {
    path: 'user',
    loadChildren: () => import('./user/app/app.routes').then(m => m.routes)
  }
];
