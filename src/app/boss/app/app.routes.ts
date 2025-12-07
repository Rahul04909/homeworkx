import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'nigerian-states',
        loadComponent: () => import('../views/nigerian-states/nigerian-states.component').then(m => m.NigerianStatesComponent),
        data: {
          title: 'Nigerian States'
        }
      },
      {
        path: 'nigerian-cities',
        loadComponent: () => import('../views/nigerian-cities/nigerian-cities.component').then(m => m.NigerianCitiesComponent),
        data: {
          title: 'Nigerian Cities'
        }
      },
      {
        path: 'country-master',
        loadComponent: () => import('../views/country-master/country-master.component').then(m => m.CountryMasterComponent),
        data: {
          title: 'Country Master'
        }
      },
      {
        path: 'all-customers',
        loadComponent: () => import('../views/all-customers/all-customers.component').then(m => m.AllCustomersComponent),
        data: {
          title: 'All Customers'
        }
      },
      {
        path: 'closure-requests',
        loadComponent: () => import('../views/closure-request/closure-request.component').then(m => m.ClosureRequestComponent),
        data: {
          title: 'Closure Requests'
        }
      },
      {
        path: 'closed-accounts',
        loadComponent: () => import('../views/closed-accounts/closed-accounts.component').then(m => m.ClosedAccountsComponent),
        data: {
          title: 'Closed Accounts'
        }
      },
      {
        path: 'property-actions',
        loadComponent: () => import('../views/property-actions/property-actions.component').then(m => m.PropertyActionsComponent),
        data: {
          title: 'Property Actions'
        }
      },
      {
        path: 'property-types',
        loadComponent: () => import('../views/property-types/property-types.component').then(m => m.PropertyTypesComponent),
        data: {
          title: 'Property Types'
        }
      },
      {
        path: 'pending-self-verification',
        loadComponent: () => import('../views/pending-self-verification/pending-self-verification.component').then(m => m.PendingSelfVerificationComponent),
        data: {
          title: 'Pending Self Verification'
        }
      },
      {
        path: 'self-verified',
        loadComponent: () => import('../views/self-verified/self-verified.component').then(m => m.SelfVerifiedComponent),
        data: {
          title: 'Self Verified'
        }
      },
      {
        path: 'pending-approval-owners',
        loadComponent: () => import('../views/pending-approval-owners/pending-approval-owners.component').then(m => m.PendingApprovalOwnersComponent),
        data: {
          title: 'Pending Approval Owners'
        }
      },
      {
        path: 'approved-owners',
        loadComponent: () => import('../views/approved-owners/approved-owners.component').then(m => m.ApprovedOwnersComponent),
        data: {
          title: 'Approved Owners'
        }
      },
      {
        path: 'owner-closure-requests',
        loadComponent: () => import('../views/owner-closure-requests/owner-closure-requests.component').then(m => m.OwnerClosureRequestsComponent),
        data: {
          title: 'Owner Closure Requests'
        }
      },
      {
        path: 'owner-closed-accounts',
        loadComponent: () => import('../views/owner-closed-accounts/owner-closed-accounts.component').then(m => m.OwnerClosedAccountsComponent),
        data: {
          title: 'Owner Closed Accounts'
        }
      },
      {
        path: 'pending-approval-agents',
        loadComponent: () => import('../views/pending-approval-agents/pending-approval-agents.component').then(m => m.PendingApprovalAgentsComponent),
        data: {
          title: 'Pending Approval Agents'
        }
      },
      {
        path: 'approved-agents',
        loadComponent: () => import('../views/approved-agents/approved-agents.component').then(m => m.ApprovedAgentsComponent),
        data: {
          title: 'Approved Agents'
        }
      },
      {
        path: 'agent-closure-requests',
        loadComponent: () => import('../views/agent-closure-requests/agent-closure-requests.component').then(m => m.AgentClosureRequestsComponent),
        data: {
          title: 'Agent Closure Requests'
        }
      },
      {
        path: 'agent-closed-accounts',
        loadComponent: () => import('../views/agent-closed-accounts/agent-closed-accounts.component').then(m => m.AgentClosedAccountsComponent),
        data: {
          title: 'Agent Closed Accounts'
        }
      },
      {
        path: 'service-leads',
        loadComponent: () => import('../views/service-leads/service-leads.component').then(m => m.ServiceLeadsComponent),
        data: {
          title: 'Service Leads'
        }
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      },
      {
        path: 'profile/password',
        loadComponent: () => import('../views/update-password/update-password.component').then(m => m.UpdatePasswordComponent),
        data: {
          title: 'Update Password'
        }
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./views/pages/forgot-password/start.component').then(m => m.ForgotStartComponent),
    data: { title: 'Forgot Password' }
  },
  {
    path: 'forgot-password/verify',
    loadComponent: () => import('./views/pages/forgot-password/verify.component').then(m => m.ForgotVerifyComponent),
    data: { title: 'Verify OTP' }
  },
  {
    path: 'forgot-password/reset',
    loadComponent: () => import('./views/pages/forgot-password/reset.component').then(m => m.ForgotResetComponent),
    data: { title: 'Reset Password' }
  },
  {
    path: 'forgot-password/success',
    loadComponent: () => import('./views/pages/forgot-password/success.component').then(m => m.ForgotSuccessComponent),
    data: { title: 'Success' }
  },
  { path: '**', redirectTo: 'dashboard' }
];
