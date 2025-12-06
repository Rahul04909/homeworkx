import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Country {
  id: number;
  name: string;
  isdCode: string;
  timezone: string;
  currencyName: string;
  currencySymbol: string;
  enabled: boolean;
}

@Component({
  selector: 'app-country-master',
  templateUrl: './country-master.component.html',
  styleUrls: ['./country-master.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CountryMasterComponent {
  countries: Country[] = [
    { id: 1, name: 'Nigeria', isdCode: '+234', timezone: 'WAT', currencyName: 'Naira', currencySymbol: '₦', enabled: true },
    { id: 2, name: 'United States', isdCode: '+1', timezone: 'EST', currencyName: 'US Dollar', currencySymbol: '$', enabled: true },
    { id: 3, name: 'United Kingdom', isdCode: '+44', timezone: 'GMT', currencyName: 'Pound Sterling', currencySymbol: '£', enabled: false },
    { id: 4, name: 'India', isdCode: '+91', timezone: 'IST', currencyName: 'Indian Rupee', currencySymbol: '₹', enabled: true },
    { id: 5, name: 'Canada', isdCode: '+1', timezone: 'EST', currencyName: 'Canadian Dollar', currencySymbol: 'C$', enabled: false },
  ];

  addNewCountry(): void {
    alert('Add New Country functionality will be implemented here.');
  }

  editCountry(country: Country): void {
    alert(`Edit Country: ${country.name} functionality will be implemented here.`);
  }

  toggleCountryStatus(country: Country): void {
    country.enabled = !country.enabled;
    alert(`${country.name} is now ${country.enabled ? 'Enabled' : 'Disabled'}.`);
  }
}
