import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Post New Property',
    url: '/properties/new',
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'My Properties',
    url: '/properties/my',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'My Subscription Plans',
    url: '/subscriptions',
    iconComponent: { name: 'cil-credit-card' }
  },
  {
    name: 'My Profile',
    url: '/profile',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Update Password',
    url: '/profile/password',
    iconComponent: { name: 'cil-lock-locked' }
  },
  {
    name: 'Close My Account',
    url: '/profile/close-account',
    iconComponent: { name: 'cil-trash' }
  },
  {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cil-envelope-open' }
  },
  {
    name: 'My Advertisements',
    url: '/ads',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Analytics',
    url: '/analytics',
    iconComponent: { name: 'cil-chart-pie' }
  }
];
