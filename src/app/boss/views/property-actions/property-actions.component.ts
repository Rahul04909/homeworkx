import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PropertyAction {
  id: number;
  name: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-property-actions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './property-actions.component.html',
  styleUrls: ['./property-actions.component.scss']
})
export class PropertyActionsComponent implements OnInit {
  allPropertyActions: PropertyAction[] = [
    { id: 1, name: 'Sale', status: 'Active' },
    { id: 2, name: 'Rent', status: 'Active' },
    { id: 3, name: 'Lease', status: 'Inactive' },
  ];

  propertyActions: PropertyAction[] = [];

  ngOnInit(): void {
    this.propertyActions = [...this.allPropertyActions];
  }

  toggleStatus(action: PropertyAction): void {
    action.status = action.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${action.name} status is now ${action.status}.`);
  }

  editAction(action: PropertyAction): void {
    // Implement actual edit logic here
  }

  addAction(): void {
    // Implement actual add logic here
  }
}
