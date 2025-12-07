import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ClosedAccount {
  id: number;
  type: 'Customer' | 'Agent' | 'Owner';
  name: string;
  email: string;
  closureDate: string;
  reason: string;
}

@Component({
  selector: 'app-closed-accounts',
  templateUrl: './closed-accounts.component.html',
  styleUrls: ['./closed-accounts.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClosedAccountsComponent implements OnInit {
  allClosedAccounts: ClosedAccount[] = [
    { id: 1, type: 'Customer', name: 'John Doe', email: 'john.doe@example.com', closureDate: '2023-01-25', reason: 'Requested by user' },
    { id: 2, type: 'Agent', name: 'Jane Smith', email: 'jane.smith@example.com', closureDate: '2023-01-26', reason: 'Inactivity' },
    { id: 3, type: 'Owner', name: 'Peter Jones', email: 'peter.jones@example.com', closureDate: '2023-01-27', reason: 'Business closed' },
    { id: 4, type: 'Customer', name: 'Alice Brown', email: 'alice.brown@example.com', closureDate: '2023-01-28', reason: 'Duplicate account' },
    { id: 5, type: 'Agent', name: 'Robert Davis', email: 'robert.davis@example.com', closureDate: '2023-01-29', reason: 'Violation of terms' },
  ];

  closedAccounts: ClosedAccount[] = [];
  pagedClosedAccounts: ClosedAccount[] = [];
  searchTerm: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredAccounts = this.allClosedAccounts;

    // Apply search term
    if (this.searchTerm) {
      filteredAccounts = filteredAccounts.filter(account =>
        account.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        account.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        account.reason.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }



    this.closedAccounts = filteredAccounts;
    this.currentPage = 1; // Reset to first page after filtering
    this.calculatePagination();
    this.getPaginatedClosedAccounts();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.closedAccounts.length / this.itemsPerPage);
    this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPaginatedClosedAccounts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedClosedAccounts = this.closedAccounts.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPaginatedClosedAccounts();
    }
  }
}
