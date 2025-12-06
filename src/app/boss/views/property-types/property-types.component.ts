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
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredTypes = this.allPropertyTypes;

    if (this.searchTerm) {
      filteredTypes = filteredTypes.filter(type =>
        type.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.propertyTypes = filteredTypes;
    this.calculatePagination();
    this.getPaginatedPropertyTypes();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.propertyTypes.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 0;
    }
  }

  getPaginatedPropertyTypes(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.propertyTypes = this.propertyTypes.slice(startIndex, endIndex);
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

  toggleStatus(type: PropertyType): void {
    type.status = type.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${type.name} status is now ${type.status}.`);
    this.applyFilters();
  }

  editType(type: PropertyType): void {
    // Implement actual edit logic here
  }

  addType(): void {
    // Implement actual add logic here
  }
}
