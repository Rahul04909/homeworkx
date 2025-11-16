import { Routes } from '@angular/router';

import { AgentDashboardComponent } from '../../dashboard/dashboard.component';
import { AgentUserProfileComponent } from '../../user-profile/user-profile.component';
import { AgentTableListComponent } from '../../table-list/table-list.component';
import { AgentTypographyComponent } from '../../typography/typography.component';
import { AgentIconsComponent } from '../../icons/icons.component';
import { AgentMapsComponent } from '../../maps/maps.component';
import { AgentNotificationsComponent } from '../../notifications/notifications.component';
import { AgentUpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: AgentDashboardComponent },
    { path: 'user-profile',   component: AgentUserProfileComponent },
    { path: 'table-list',     component: AgentTableListComponent },
    { path: 'typography',     component: AgentTypographyComponent },
    { path: 'icons',          component: AgentIconsComponent },
    { path: 'maps',           component: AgentMapsComponent },
    { path: 'notifications',  component: AgentNotificationsComponent },
    { path: 'upgrade',        component: AgentUpgradeComponent },
];
