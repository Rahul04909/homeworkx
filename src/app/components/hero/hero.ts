import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StateService } from '../../boss/app/services/state.service';

interface NigerianState {
  id?: number;
  state_id?: number;
  state_name: string;
  name?: string;
  record_is_enable?: number | boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  states: NigerianState[] = [];
  selectedState: string = 'Select State';
  showStateDropdown: boolean = false;

  constructor(
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.fetchStates();
  }

  fetchStates() {
    this.stateService.getStates().subscribe({
      next: (response: any) => {
        console.log('States fetched for hero:', response);

        let allStates: any[] = [];

        if (Array.isArray(response)) {
          allStates = response;
        } else if (response.data && Array.isArray(response.data)) {
          allStates = response.data;
        } else {
          allStates = [];
        }

        // Filter to show only enabled states
        this.states = allStates.filter((state: any) => this.isStateEnabled(state));

        console.log('Enabled states for dropdown:', this.states);
      },
      error: (error) => {
        console.error('Error fetching states in hero:', error);
        // Silently fail for public component
        this.states = [];
      }
    });
  }

  toggleStateDropdown() {
    this.showStateDropdown = !this.showStateDropdown;
  }

  selectState(state: NigerianState) {
    this.selectedState = state.name || state.state_name;
    this.showStateDropdown = false;
  }

  getStateName(state: NigerianState): string {
    return state.name || state.state_name;
  }

  isStateEnabled(state: any): boolean {
    // Only show enabled states
    if (typeof state.record_is_enable !== 'undefined') {
      return state.record_is_enable == 1;
    }
    return true;
  }

  searchProperties() {
    this.router.navigate(['/property-listing']);
  }
}
