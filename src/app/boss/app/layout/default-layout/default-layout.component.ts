import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  NavItemComponent,
  NavLinkDirective
} from '@coreui/angular';

import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { navItems } from './_nav';
import { AuthService } from '../../services/auth.service';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ContainerComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective,
    NavItemComponent,
    NavLinkDirective,
    IconDirective
  ]
})
export class DefaultLayoutComponent {
  public navItems = prefixAdmin([...navItems]);

  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
  }
}

function prefixAdmin(items: any[]): any[] {
  return items.map((item) => {
    const i: any = { ...item };
    if (typeof i.url === 'string' && i.url.startsWith('/')) {
      i.url = `/admin${i.url}`;
    }
    if (Array.isArray(i.children)) {
      i.children = prefixAdmin(i.children);
    }
    return i;
  });
}
