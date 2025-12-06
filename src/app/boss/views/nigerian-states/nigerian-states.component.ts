import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NigerianState {
  id: number;
  name: string;
  enabled: boolean;
}

@Component({
  selector: 'app-nigerian-states',
  templateUrl: './nigerian-states.component.html',
  styleUrls: ['./nigerian-states.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NigerianStatesComponent {
  states: NigerianState[] = [
    { id: 1, name: 'Lagos', enabled: true },
    { id: 2, name: 'Abuja', enabled: true },
    { id: 3, name: 'Rivers', enabled: false },
    { id: 4, name: 'Kano', enabled: true },
    { id: 5, name: 'Oyo', enabled: false },
  ];

  addNewState(): void {
    alert('Add New State functionality will be implemented here.');
  }

  editState(state: NigerianState): void {
    alert(`Edit State: ${state.name} functionality will be implemented here.`);
  }

  toggleStateStatus(state: NigerianState): void {
    state.enabled = !state.enabled;
    alert(`${state.name} is now ${state.enabled ? 'Enabled' : 'Disabled'}.`);
  }
}
