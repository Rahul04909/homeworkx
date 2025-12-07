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
      { name: 'Pending Self Verification', url: '/pending-self-verification' },
      { name: 'Self Verified', url: '/self-verified' },
      { name: 'Closure Requests', url: '/closure-requests' },
      { name: 'Closed Accounts', url: '/closed-accounts' },
      { name: 'Active Subscriptions', url: '/customers/active-subscriptions' },
      { name: 'Expired Subscriptions', url: '/customers/expired-subscriptions' },
      { name: 'Conversations', url: '/customers/conversations' }
    ]
  },
  {
    name: 'Owners',
    iconComponent: { name: 'cil-user' },
    children: [
      { name: 'Pending Approvals', url: '/pending-approval-owners' },
      { name: 'Approved Owners', url: '/approved-owners' },
      { name: 'Closure Requests', url: '/owner-closure-requests' },
      { name: 'Closed Accounts', url: '/owner-closed-accounts' },
      { name: 'Conversations', url: '/owners/conversations' },
      { name: 'Transactions', url: '/owners/transactions' }
    ]
  },
  {
    name: 'Agents',
    iconComponent: { name: 'cil-user' },
    children: [
      { name: 'Pending Approvals', url: '/pending-approval-agents' },
      { name: 'Approved Agents', url: '/approved-agents' },
      { name: 'Closure Requests', url: '/agent-closure-requests' },
      { name: 'Closed Accounts', url: '/agent-closed-accounts' },
      { name: 'Transactions', url: '/agents/transactions' },
      { name: 'Subscriptions', url: '/agents/subscriptions' },
      { name: 'Conversations', url: '/agents/conversations' }
    ]
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
