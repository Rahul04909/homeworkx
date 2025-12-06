import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Search History',
    url: '/searches',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Properties Viewed',
    url: '/properties/viewed',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Shortlisted Properties',
    url: '/properties/shortlisted',
    iconComponent: { name: 'cil-star' }
  },
   {
    name: 'Messages',
    url: '/messages',
    iconComponent: { name: 'cil-envelope-open' }
  },
  {
    name: 'Reviews Given',
    url: '/reviews',
    iconComponent: { name: 'cil-comment-square' }
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
  }
];
