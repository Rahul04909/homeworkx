import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PropertyType {
  id: number;
  name: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-property-types',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './property-types.component.html',
  styleUrls: ['./property-types.component.scss']
})
export class PropertyTypesComponent implements OnInit {
  allPropertyTypes: PropertyType[] = [
    { id: 1, name: 'Residential', status: 'Active' },
    { id: 2, name: 'Commercial', status: 'Active' },
    { id: 3, name: 'Land', status: 'Inactive' },
  ];

  propertyTypes: PropertyType[] = [];

  ngOnInit(): void {
    this.propertyTypes = [...this.allPropertyTypes];
  }

  toggleStatus(type: PropertyType): void {
    type.status = type.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${type.name} status is now ${type.status}.`);
  }

  editType(type: PropertyType): void {
    // Implement actual edit logic here
  }

  addType(): void {
    // Implement actual add logic here
  }
}
