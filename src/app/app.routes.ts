import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about-us', loadComponent: () => import('../about-us/about-us').then(m => m.AboutUs) },
  { path: 'privacy-policy', loadComponent: () => import('../privacy-policy/privacy-policy').then(m => m.PrivacyPolicy) },
  { path: 'terms-and-conditions', loadComponent: () => import('../terms-and-conditions/terms-and-conditions').then(m => m.TermsAndConditions) },
  { path: 'faqs', loadComponent: () => import('../pages/faqs/faqs').then(m => m.Faqs) },
  { path: 'contact-us', loadComponent: () => import('../pages/contact-us/contact-us').then(m => m.ContactUs) },
  { path: 'emi-loan-calculator', loadComponent: () => import('../tools/emi-loan-calculator/emi-loan-calculator').then(m => m.EmiLoanCalculator) },
  { path: 'roi-calculator', loadComponent: () => import('../tools/roi-calculator/roi-calculator').then(m => m.RoiCalculator) },
  { path: 'career', loadComponent: () => import('../pages/career/career').then(m => m.Career) },
  { path: 'company-strutchre', loadComponent: () => import('../pages/company-strutchre/company-strutchre').then(m => m.CompanyStrutchre) },
  { path: 'services/easy-loans', loadComponent: () => import('../services/easy-loans/easy-loans').then(m => m.EasyLoans) },
  { path: 'services/interior-design-and-home-upgrades', loadComponent: () => import('../services/interior-desigen-and-home-upgrade/interior-desigen-and-home-upgrade').then(m => m.InteriorDesigenAndHomeUpgrade) },
  { path: 'services/property-valuation', loadComponent: () => import('../services/property-valuation/property-valuation').then(m => m.PropertyValuation) },
  { path: 'services/documentation', loadComponent: () => import('../services/documentation/documentation').then(m => m.Documentation) },
  { path: 'services/property-management', loadComponent: () => import('../services/property-management/property-management').then(m => m.PropertyManagement) },
  { path: 'services/rent-management', loadComponent: () => import('../services/rent-management/rent-management').then(m => m.RentManagement) },
  { path: 'services/property-finder', loadComponent: () => import('../services/property-finder/property-finder').then(m => m.PropertyFinder) },
  { path: 'services/packers-and-movers', loadComponent: () => import('../services/packers-and-movers/packers-and-movers').then(m => m.PackersAndMovers) },
  { path: 'services/verification', loadComponent: () => import('../services/verification/verification').then(m => m.Verification) },
  { path: 'services/renovation', loadComponent: () => import('../services/renovation/renovation').then(m => m.Renovation) },
  { path: 'services/buy', loadComponent: () => import('../services/buy/buy').then(m => m.Buy) },
  { path: 'services/lease', loadComponent: () => import('../services/lease/lease').then(m => m.Lease) },
  { path: 'services/project', loadComponent: () => import('../services/project/project').then(m => m.Project) },
  { path: 'services/rent', loadComponent: () => import('../services/rent/rent').then(m => m.Rent) },
  { path: 'services/sell', loadComponent: () => import('../services/sell/sell').then(m => m.Sell) },
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
