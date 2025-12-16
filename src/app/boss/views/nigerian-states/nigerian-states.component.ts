import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  TableModule,
  ModalModule,
  FormModule,
  GridModule
} from '@coreui/angular';
import { StateService } from '../../app/services/state.service';

interface NigerianState {
  id?: number;
  state_id?: number;
  state_name: string;
  record_is_enable: number | boolean;
  // UI helpers
  name?: string;
  enabled?: boolean;
}

@Component({
  selector: 'app-nigerian-states',
  templateUrl: './nigerian-states.component.html',
  styleUrls: ['./nigerian-states.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormModule,
    GridModule
  ]
})
export class NigerianStatesComponent implements OnInit {
  states: NigerianState[] = [];
  visible = false;

  // Form Model
  newState: any = {
    state_name: '',
    record_is_enable: '1' // Default to string '1' for select binding, or 1 for number
  };

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.fetchStates();
  }

  fetchStates() {
    this.stateService.getStates().subscribe({
      next: (response: any) => {
        // Assume response is array or part of object
        console.log('States fetched:', response);
        // Map API response to Component Model if needed, typically response.data or just response
        // Adjust based on actual API shape. If it returns [ {state_name: ...}, ... ]
        if (Array.isArray(response)) {
          this.states = response;
        } else if (response.data && Array.isArray(response.data)) {
          this.states = response.data;
        } else {
          // Fallback for demo or unexpected structure
          this.states = [];
        }
      },
      error: (error) => {
        console.error('Error fetching states:', error);
      }
    });
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  addNewState() {
    this.visible = true;
    this.newState = { state_name: '', record_is_enable: '1' };
    delete this.newState.state_id; // Ensure no ID for new adds
  }

  editState(state: any) {
    console.log('Edit State clicked. Raw state object:', state);
    this.visible = true;
    this.newState = {
      state_id: state.state_id || state.id,
      state_name: state.name || state.state_name,
      record_is_enable: this.isStateEnabled(state) ? '1' : '0'
    };
    console.log('Prepared newState for edit:', this.newState);
  }

  submitNewState() {
    const payload: any = {
      state_name: this.newState.state_name,
      record_is_enable: parseInt(this.newState.record_is_enable, 10)
    };

    // Include ID if editing (update operation)
    if (this.newState.state_id) {
      payload.state_id = this.newState.state_id;
    }

    console.log('Submitting state:', payload);

    let request$: any;
    if (payload.state_id) {
      console.log('Performing Update');
      request$ = this.stateService.updateState(payload);
    } else {
      console.log('Performing Create');
      request$ = this.stateService.addState(payload);
    }

    request$.subscribe({
      next: (response: any) => {
        console.log('State saved:', response);
        this.visible = false;

        // Optimistic / Immediate update of local list
        if (payload.state_id) {
          const index = this.states.findIndex(s => (s.state_id || s.id) === payload.state_id);
          if (index !== -1) {
            this.states[index] = { ...this.states[index], ...payload, name: payload.state_name };
          }
        } else {
          // For add, we might just refresh or append if we had the full object
          // But refresh is safer for ID generation
        }

        this.fetchStates(); // Refresh list from server to be sure
      },
      error: (error: any) => {
        console.error('Error saving state:', error);
      }
    });
  }

  toggleStateStatus(state: any): void {
    // Simple status toggle matching Property Actions and Property Types
    const currentStatus = this.isStateEnabled(state);
    state.record_is_enable = currentStatus ? 0 : 1;
    const newStatusText = state.record_is_enable == 1 ? 'Active' : 'Inactive';
    alert(`${state.name || state.state_name} status is now ${newStatusText}.`);
  }

  // Helpers for template compatibility with old code
  getStateName(state: any): string {
    return state.name || state.state_name;
  }

  isStateEnabled(state: any): boolean {
    // API uses 1 for enabled
    if (typeof state.record_is_enable !== 'undefined') {
      return state.record_is_enable == 1;
    }
    return !!state.enabled;
  }
}
