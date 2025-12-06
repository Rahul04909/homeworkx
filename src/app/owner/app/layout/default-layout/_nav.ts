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
    name: 'Properties Posted',
    url: '/properties/my',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cil-envelope-open' }
  },
  {
    name: 'Advertisements',
    url: '/ads',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Subscription Plans',
    url: '/subscriptions',
    iconComponent: { name: 'cil-credit-card' }
  },
  {
    name: 'Data Analytics',
    url: '/analytics',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Profile',
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
  }
];
