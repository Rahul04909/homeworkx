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
import { PropertyTypeService } from '../../app/services/property-type.service';

interface PropertyType {
  id?: number;
  ppt_type_id?: number;
  name?: string;
  ppt_type_name: string;
  record_is_enable: number | boolean;
  status?: string; // Keep for compatibility if needed, but we'll use record_is_enable
}

@Component({
  selector: 'app-property-types',
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
  templateUrl: './property-types.component.html',
  styleUrls: ['./property-types.component.scss']
})
export class PropertyTypesComponent implements OnInit {
  propertyTypes: PropertyType[] = [];
  visible = false;

  // Form Model
  newType: any = {
    ppt_type_name: '',
    record_is_enable: '1'
  };

  constructor(private propertyTypeService: PropertyTypeService) { }

  ngOnInit(): void {
    this.fetchPropertyTypes();
  }

  fetchPropertyTypes() {
    this.propertyTypeService.getPropertyTypes().subscribe({
      next: (response: any) => {
        console.log('Property Types fetched:', response);
        let rawData = [];
        if (Array.isArray(response)) {
          rawData = response;
        } else if (response.data && Array.isArray(response.data)) {
          rawData = response.data;
        }

        // Map API data to UI model (record_is_enable -> status)
        this.propertyTypes = rawData.map((item: any) => ({
          ...item,
          status: item.record_is_enable == 1 ? 'Active' : 'Inactive'
        }));
      },
      error: (error) => {
        console.error('Error fetching property types:', error);
      }
    });
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  addType() {
    this.visible = true;
    this.newType = { ppt_type_name: '', record_is_enable: '1' };
    delete this.newType.ppt_type_id;
  }

  editType(type: any) {
    console.log('Edit Type clicked:', type);
    this.visible = true;
    this.newType = {
      ppt_type_id: type.ppt_type_id || type.id,
      ppt_type_name: type.ppt_type_name || type.name,
      record_is_enable: type.status === 'Active' ? '1' : '0'
    };
  }

  submitNewType() {
    const payload: any = {
      ppt_type_name: this.newType.ppt_type_name,
      record_is_enable: parseInt(this.newType.record_is_enable, 10)
    };

    if (this.newType.ppt_type_id) {
      payload.ppt_type_id = this.newType.ppt_type_id;
    }

    console.log('Submitting property type:', payload);

    let request$: any;
    if (payload.ppt_type_id) {
      request$ = this.propertyTypeService.updatePropertyType(payload);
    } else {
      request$ = this.propertyTypeService.addPropertyType(payload);
    }

    request$.subscribe({
      next: (response: any) => {
        console.log('Property Type saved:', response);
        this.visible = false;
        this.fetchPropertyTypes();
      },
      error: (error: any) => {
        console.error('Error saving property type:', error);
      }
    });
  }

  toggleStatus(type: any): void {
    // Keep the existing status toggle functionality matching Property Actions
    type.status = type.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${type.ppt_type_name || type.name} status is now ${type.status}.`);
  }

  // Helpers
  getTypeName(type: any): string {
    return type.ppt_type_name || type.name;
  }
}
