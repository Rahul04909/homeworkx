import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  id: number;
  name: string;
  email: string;
  status: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AllCustomersComponent implements OnInit {
  allCustomers: Customer[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: false, imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Robert Davis', email: 'robert.davis@example.com', status: false, imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Emily White', email: 'emily.white@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, name: 'Michael Green', email: 'michael.green@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, name: 'Sarah Black', email: 'sarah.black@example.com', status: false, imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, name: 'David Blue', email: 'david.blue@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Laura Red', email: 'laura.red@example.com', status: true, imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ];

  customers: Customer[] = [];
  pagedCustomers: Customer[] = [];
  searchTerm: string = '';
  filterStatus: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredCustomers = this.allCustomers;

    // Apply search term
    if (this.searchTerm) {
      filteredCustomers = filteredCustomers.filter(customer =>
        customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (this.filterStatus !== '') {
      const status = this.filterStatus === 'true';
      filteredCustomers = filteredCustomers.filter(customer => customer.status === status);
    }

    this.customers = filteredCustomers;
    this.currentPage = 1; // Reset to first page after filtering
    this.calculatePagination();
    this.getPaginatedCustomers();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.customers.length / this.itemsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPaginatedCustomers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedCustomers = this.customers.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPaginatedCustomers();
    }
  }

  addNewCustomer(): void {
    alert('Add New Customer functionality will be implemented here.');
  }

  editCustomer(customer: Customer): void {
    alert(`Edit Customer: ${customer.name} functionality will be implemented here.`);
  }

  toggleCustomerStatus(customer: Customer): void {
    customer.status = !customer.status;
    alert(`${customer.name} is now ${customer.status ? 'Enabled' : 'Disabled'}.`);
    this.applyFilters(); // Re-apply filters to update the view if status filter is active
  }
}
