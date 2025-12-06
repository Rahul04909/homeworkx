import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ClosureRequest {
  id: number;
  type: 'Customer' | 'Agent' | 'Owner';
  name: string;
  email: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestDate: string;
}

@Component({
  selector: 'app-closure-request',
  templateUrl: './closure-request.component.html',
  styleUrls: ['./closure-request.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClosureRequestComponent implements OnInit {
  allRequests: ClosureRequest[] = [
    { id: 1, type: 'Customer', name: 'John Doe', email: 'john.doe@example.com', status: 'Pending', requestDate: '2023-01-15' },
    { id: 2, type: 'Agent', name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending', requestDate: '2023-01-16' },
    { id: 3, type: 'Owner', name: 'Peter Jones', email: 'peter.jones@example.com', status: 'Approved', requestDate: '2023-01-17' },
    { id: 4, type: 'Customer', name: 'Alice Brown', email: 'alice.brown@example.com', status: 'Pending', requestDate: '2023-01-18' },
    { id: 5, type: 'Agent', name: 'Robert Davis', email: 'robert.davis@example.com', status: 'Rejected', requestDate: '2023-01-19' },
    { id: 6, type: 'Customer', name: 'Emily White', email: 'emily.white@example.com', status: 'Pending', requestDate: '2023-01-20' },
    { id: 7, type: 'Owner', name: 'Michael Green', email: 'michael.green@example.com', status: 'Pending', requestDate: '2023-01-21' },
  ];

  requests: ClosureRequest[] = [];
  pagedRequests: ClosureRequest[] = [];
  searchTerm: string = '';
  filterType: string = '';
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

    // Apply type filter
    if (this.filterType) {
      filteredRequests = filteredRequests.filter(request => request.type === this.filterType);
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

  approveRequest(request: ClosureRequest): void {
    if (confirm(`क्या आप ${request.name} के अकाउंट क्लोजर रिक्वेस्ट को अप्रूव करना चाहेंगे?`)) {
      request.status = 'Approved';
      alert(`${request.name} का अकाउंट क्लोजर रिक्वेस्ट अप्रूव हो गया है।`);
      this.applyFilters(); // Re-apply filters to update the view
    }
  }

  rejectRequest(request: ClosureRequest): void {
    if (confirm(`क्या आप ${request.name} के अकाउंट क्लोजर रिक्वेस्ट को रिजेक्ट करना चाहेंगे?`)) {
      request.status = 'Rejected';
      alert(`${request.name} का अकाउंट क्लोजर रिक्वेस्ट रिजेक्ट हो गया है।`);
      this.applyFilters(); // Re-apply filters to update the view
    }
  }
}
