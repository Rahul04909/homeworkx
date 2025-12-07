import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface OwnerClosedAccount {
  id: number;
  name: string;
  email: string;
  closureDate: string;
  reason: string;
}

@Component({
  selector: 'app-owner-closed-accounts',
  templateUrl: './owner-closed-accounts.component.html',
  styleUrls: ['./owner-closed-accounts.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class OwnerClosedAccountsComponent implements OnInit {
  allClosedAccounts: OwnerClosedAccount[] = [
    { id: 1, name: 'Michael Johnson', email: 'michael.johnson@example.com', closureDate: '2024-11-25', reason: 'Requested by user' },
    { id: 2, name: 'Sarah Williams', email: 'sarah.williams@example.com', closureDate: '2024-11-26', reason: 'Inactivity' },
    { id: 3, name: 'David Brown', email: 'david.brown@example.com', closureDate: '2024-11-27', reason: 'Business closed' },
    { id: 4, name: 'Lisa Anderson', email: 'lisa.anderson@example.com', closureDate: '2024-11-28', reason: 'Duplicate account' },
    { id: 5, name: 'James Wilson', email: 'james.wilson@example.com', closureDate: '2024-11-29', reason: 'Violation of terms' },
  ];

  closedAccounts: OwnerClosedAccount[] = [];
  pagedClosedAccounts: OwnerClosedAccount[] = [];
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

