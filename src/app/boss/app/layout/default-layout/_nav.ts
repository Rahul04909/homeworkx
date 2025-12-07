import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Masters',
    iconComponent: { name: 'cil-list' },
    children: [
      { name: 'Nigerian States', url: '/nigerian-states' },
      { name: 'Nigerian Cities', url: '/nigerian-cities' },
      { name: 'Country Master', url: '/country-master' },
      { name: 'Property Action Types', url: '/property-actions' },
      { name: 'Property Types', url: '/property-types' }
    ]
  },
  {
    name: 'Customers',
    iconComponent: { name: 'cil-user' },
    children: [
      { name: 'Pending Self Verification', url: '/pending-self-verification' },
      { name: 'Self Verified', url: '/self-verified' },
      { name: 'Closure Requests', url: '/closure-requests' },
      { name: 'Closed Accounts', url: '/closed-accounts' },
      { name: 'Transactions', url: '/customers/transactions' },
      { name: 'Subscriptions', url: '/customers/subscriptions' },
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
      { name: 'Transactions', url: '/owners/transactions' },
      { name: 'Subscriptions', url: '/owners/subscriptions' },
      { name: 'Conversations', url: '/owners/conversations' },
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
    iconComponent: { name: 'cil-task' },
    children: [
      { name: 'Home Loan Leads', url: '/service-leads' }
    ]
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
    name: 'Blogs',
    url: '/blogs',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Sub-Admins',
    url: '/sub-admins',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Ng Wiki',
    url: '/ng-wiki',
    iconComponent: { name: 'cil-task' }
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
