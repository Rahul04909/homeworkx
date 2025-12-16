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
import { PropertyActionService } from '../../app/services/property-action.service';

interface PropertyAction {
  id?: number;
  ppt_action_type_id?: number;
  name?: string;
  ppt_action_type_name: string;
  record_is_enable: number | boolean;
  status?: string;
}

@Component({
  selector: 'app-property-actions',
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
  ],
  templateUrl: './property-actions.component.html',
  styleUrls: ['./property-actions.component.scss']
})
export class PropertyActionsComponent implements OnInit {
  propertyActions: PropertyAction[] = [];
  visible = false;

  // Form Model
  newAction: any = {
    ppt_action_type_name: ''
  };

  constructor(private propertyActionService: PropertyActionService) { }

  ngOnInit(): void {
    this.fetchPropertyActionTypes();
  }

  fetchPropertyActionTypes() {
    this.propertyActionService.getPropertyActionTypes().subscribe({
      next: (response: any) => {
        console.log('Property Action Types fetched:', response);
        let rawData = [];
        if (Array.isArray(response)) {
          rawData = response;
        } else if (response.data && Array.isArray(response.data)) {
          rawData = response.data;
        }

        // Map API data to UI model (record_is_enable -> status)
        this.propertyActions = rawData.map((item: any) => ({
          ...item,
          status: item.record_is_enable == 1 ? 'Active' : 'Inactive'
        }));
      },
      error: (error) => {
        console.error('Error fetching property action types:', error);
      }
    });
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  addAction() {
    this.visible = true;
    this.newAction = { ppt_action_type_name: '' };
    delete this.newAction.ppt_action_type_id;
  }

  editAction(action: any) {
    console.log('Edit Action clicked:', action);
    this.visible = true;
    this.newAction = {
      ppt_action_type_id: action.ppt_action_type_id || action.id,
      ppt_action_type_name: action.ppt_action_type_name || action.name
    };
  }

  submitNewAction() {
    const payload: any = {
      ppt_action_type_name: this.newAction.ppt_action_type_name
    };

    if (this.newAction.ppt_action_type_id) {
      payload.ppt_action_type_id = this.newAction.ppt_action_type_id;
    }

    console.log('Submitting property action type:', payload);

    let request$: any;
    if (payload.ppt_action_type_id) {
      request$ = this.propertyActionService.updatePropertyActionType(payload);
    } else {
      request$ = this.propertyActionService.addPropertyActionType(payload);
    }

    request$.subscribe({
      next: (response: any) => {
        console.log('Property Action Type saved:', response);
        this.visible = false;
        this.fetchPropertyActionTypes();
      },
      error: (error: any) => {
        console.error('Error saving property action type:', error);
      }
    });
  }

  toggleStatus(action: any): void {
    // Keep the existing status toggle functionality unchanged as per requirements
    action.status = action.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${action.ppt_action_type_name || action.name} status is now ${action.status}.`);
  }

  // Helpers
  getActionName(action: any): string {
    return action.ppt_action_type_name || action.name;
  }
}
