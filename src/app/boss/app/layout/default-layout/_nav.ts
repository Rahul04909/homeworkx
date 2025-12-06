import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Masters',
    iconComponent: { name: 'cil-list' },
    children: [
      { name: 'Nigerian States', url: '/nigerian-states' },
      { name: 'Nigerian Cities', url: '/nigerian-cities' },
      { name: 'Country Master', url: '/country-master' },
      { name: 'All Customers', url: '/all-customers' },
      { name: 'Property Action Types', url: '/property-actions' },
      { name: 'Property Types', url: '/property-types' }
    ]
  },
  {
    name: 'Customers',
    iconComponent: { name: 'cil-user' },
    children: [
      { name: 'All Customers', url: '/all-customers' },
      { name: 'Closure Requests', url: '/closure-requests' },
      { name: 'Closed Accounts', url: '/closed-accounts' },
      { name: 'Active Subscriptions', url: '/customers/active-subscriptions' },
      { name: 'Expired Subscriptions', url: '/customers/expired-subscriptions' },
      { name: 'Conversations', url: '/customers/conversations' }
    ]
  },
  {
    name: 'Owners',
    url: '/owners',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Agents',
    url: '/agents',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Services',
    url: '/services',
    iconComponent: { name: 'cil-task' }
  },
  {
    name: 'Subscription Plans',
    url: '/subscriptions',
    iconComponent: { name: 'cil-credit-card' }
  },
  {
    name: 'Advertisement',
    url: '/ads',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Update Password',
    url: '/profile/password',
    iconComponent: { name: 'cil-lock-locked' }
  },
  {
    name: 'Logout',
    url: '/logout'
  }
];
