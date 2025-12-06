import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NigerianCity {
  id: number;
  name: string;
  state: string;
  enabled: boolean;
}

@Component({
  selector: 'app-nigerian-cities',
  templateUrl: './nigerian-cities.component.html',
  styleUrls: ['./nigerian-cities.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NigerianCitiesComponent {
  cities: NigerianCity[] = [
    { id: 1, name: 'Ikeja', state: 'Lagos', enabled: true },
    { id: 2, name: 'Abuja Municipal', state: 'Abuja', enabled: true },
    { id: 3, name: 'Port Harcourt', state: 'Rivers', enabled: false },
    { id: 4, name: 'Kano', state: 'Kano', enabled: true },
    { id: 5, name: 'Ibadan', state: 'Oyo', enabled: false },
  ];

  addNewCity(): void {
    alert('Add New City functionality will be implemented here.');
  }

  editCity(city: NigerianCity): void {
    alert(`Edit City: ${city.name} functionality will be implemented here.`);
  }

  toggleCityStatus(city: NigerianCity): void {
    city.enabled = !city.enabled;
    alert(`${city.name} is now ${city.enabled ? 'Enabled' : 'Disabled'}.`);
  }
}
