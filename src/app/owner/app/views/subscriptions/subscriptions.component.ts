import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ProgressComponent,
  BadgeComponent,
  ButtonDirective,
  
} from '@coreui/angular';

interface Plan {
  name: string;
  priceMonthly: number;
  periodDays: number;
  start: Date;
  end: Date;
  features: string[];
  status: 'active' | 'expired' | 'trial';
}

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent, ProgressComponent, BadgeComponent, ButtonDirective]
})
export class SubscriptionsComponent {
  current: Plan = {
    name: 'Pro',
    priceMonthly: 49,
    periodDays: 30,
    start: new Date(),
    end: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 21),
    features: ['Up to 50 listings', 'Priority support', 'Featured placements', 'Analytics access'],
    status: 'active'
  };

  upgrades: Plan[] = [
    { name: 'Starter', priceMonthly: 0, periodDays: 14, start: new Date(), end: new Date(), features: ['Up to 5 listings', 'Basic support'], status: 'trial' },
    { name: 'Pro', priceMonthly: 49, periodDays: 30, start: new Date(), end: new Date(), features: ['Up to 50 listings', 'Priority support', 'Featured placements', 'Analytics access'], status: 'active' },
    { name: 'Business', priceMonthly: 99, periodDays: 30, start: new Date(), end: new Date(), features: ['Unlimited listings', 'Dedicated manager', 'Sponsored placements', 'Advanced analytics'], status: 'active' }
  ];

  get daysLeft(): number {
    const now = new Date().getTime();
    const leftMs = this.current.end.getTime() - now;
    return Math.max(0, Math.ceil(leftMs / (1000 * 60 * 60 * 24)));
  }

  get progress(): number {
    const total = this.current.periodDays;
    const used = Math.min(total, total - this.daysLeft);
    return Math.round((used / total) * 100);
  }

  upgrade(to: Plan) {
    this.current = {
      ...to,
      start: new Date(),
      end: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * to.periodDays),
      status: 'active'
    };
  }
}
