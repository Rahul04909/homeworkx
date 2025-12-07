import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AgentClosureRequest {
  id: number;
  name: string;
  email: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestDate: string;
}

@Component({
  selector: 'app-agent-closure-requests',
  templateUrl: './agent-closure-requests.component.html',
  styleUrls: ['./agent-closure-requests.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AgentClosureRequestsComponent implements OnInit {
  allRequests: AgentClosureRequest[] = [
    { id: 1, name: 'Thomas Anderson', email: 'thomas.anderson@example.com', status: 'Pending', requestDate: '2024-12-01' },
    { id: 2, name: 'Patricia Martinez', email: 'patricia.martinez@example.com', status: 'Pending', requestDate: '2024-12-02' },
    { id: 3, name: 'Christopher Lee', email: 'christopher.lee@example.com', status: 'Approved', requestDate: '2024-12-03' },
    { id: 4, name: 'Jennifer Garcia', email: 'jennifer.garcia@example.com', status: 'Pending', requestDate: '2024-12-04' },
    { id: 5, name: 'Daniel Kim', email: 'daniel.kim@example.com', status: 'Rejected', requestDate: '2024-12-05' },
    { id: 6, name: 'Amanda White', email: 'amanda.white@example.com', status: 'Pending', requestDate: '2024-12-06' },
  ];

  requests: AgentClosureRequest[] = [];
  pagedRequests: AgentClosureRequest[] = [];
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

  approveRequest(request: AgentClosureRequest): void {
    if (confirm(`Are you sure you want to approve closure request for ${request.name}?`)) {
      request.status = 'Approved';
      alert(`${request.name}'s closure request has been approved.`);
      this.applyFilters();
    }
  }

  rejectRequest(request: AgentClosureRequest): void {
    if (confirm(`Are you sure you want to reject closure request for ${request.name}?`)) {
      request.status = 'Rejected';
      alert(`${request.name}'s closure request has been rejected.`);
      this.applyFilters();
    }
  }
}

