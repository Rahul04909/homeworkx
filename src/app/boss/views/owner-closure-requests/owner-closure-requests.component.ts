import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface OwnerClosureRequest {
  id: number;
  name: string;
  email: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestDate: string;
}

@Component({
  selector: 'app-owner-closure-requests',
  templateUrl: './owner-closure-requests.component.html',
  styleUrls: ['./owner-closure-requests.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class OwnerClosureRequestsComponent implements OnInit {
  allRequests: OwnerClosureRequest[] = [
    { id: 1, name: 'Michael Johnson', email: 'michael.johnson@example.com', status: 'Pending', requestDate: '2024-12-01' },
    { id: 2, name: 'Sarah Williams', email: 'sarah.williams@example.com', status: 'Pending', requestDate: '2024-12-02' },
    { id: 3, name: 'David Brown', email: 'david.brown@example.com', status: 'Approved', requestDate: '2024-12-03' },
    { id: 4, name: 'Lisa Anderson', email: 'lisa.anderson@example.com', status: 'Pending', requestDate: '2024-12-04' },
    { id: 5, name: 'James Wilson', email: 'james.wilson@example.com', status: 'Rejected', requestDate: '2024-12-05' },
    { id: 6, name: 'Robert Taylor', email: 'robert.taylor@example.com', status: 'Pending', requestDate: '2024-12-06' },
  ];

  requests: OwnerClosureRequest[] = [];
  pagedRequests: OwnerClosureRequest[] = [];
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
    let filteredRequests = this.allRequests;

    // Apply search term
    if (this.searchTerm) {
      filteredRequests = filteredRequests.filter(request =>
        request.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (this.filterStatus) {
      filteredRequests = filteredRequests.filter(request => request.status === this.filterStatus);
    }

    this.requests = filteredRequests;
    this.currentPage = 1; // Reset to first page after filtering
    this.calculatePagination();
    this.getPaginatedRequests();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.requests.length / this.itemsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPaginatedRequests(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedRequests = this.requests.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPaginatedRequests();
    }
  }

  approveRequest(request: OwnerClosureRequest): void {
    if (confirm(`Are you sure you want to approve closure request for ${request.name}?`)) {
      request.status = 'Approved';
      alert(`${request.name}'s closure request has been approved.`);
      this.applyFilters();
    }
  }

  rejectRequest(request: OwnerClosureRequest): void {
    if (confirm(`Are you sure you want to reject closure request for ${request.name}?`)) {
      request.status = 'Rejected';
      alert(`${request.name}'s closure request has been rejected.`);
      this.applyFilters();
    }
  }
}

