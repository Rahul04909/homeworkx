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
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredActions = this.allPropertyActions;

    if (this.searchTerm) {
      filteredActions = filteredActions.filter(action =>
        action.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.propertyActions = filteredActions;
    this.calculatePagination();
    this.getPaginatedPropertyActions();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.propertyActions.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 0;
    }
  }

  getPaginatedPropertyActions(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.propertyActions = this.propertyActions.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyFilters();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }

  toggleStatus(action: PropertyAction): void {
    action.status = action.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${action.name} status is now ${action.status}.`);
    this.applyFilters();
  }

  editAction(action: PropertyAction): void {
    // Implement actual edit logic here
  }

  addAction(): void {
    // Implement actual add logic here
  }
}
