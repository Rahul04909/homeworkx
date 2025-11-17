import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  }
  ,
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/start.component').then(m => m.ForgotStartComponent),
    data: { title: 'Forgot Password' }
  },
  {
    path: 'forgot-password/verify',
    loadComponent: () => import('./forgot-password/verify.component').then(m => m.ForgotVerifyComponent),
    data: { title: 'Verify OTP' }
  },
  {
    path: 'forgot-password/reset',
    loadComponent: () => import('./forgot-password/reset.component').then(m => m.ForgotResetComponent),
    data: { title: 'Reset Password' }
  },
  {
    path: 'forgot-password/success',
    loadComponent: () => import('./forgot-password/success.component').then(m => m.ForgotSuccessComponent),
    data: { title: 'Success' }
  },
  {
    path: 'forget-password',
    loadComponent: () => import('./forgot-password/start.component').then(m => m.ForgotStartComponent),
    data: { title: 'Forgot Password' }
  }
];
