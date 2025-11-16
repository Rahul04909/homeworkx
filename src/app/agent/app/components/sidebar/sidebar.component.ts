import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/agent/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/agent/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/agent/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/agent/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/agent/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/agent/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/agent/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/agent/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule]
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
