import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AgentClosedAccount {
  id: number;
  name: string;
  email: string;
  closureDate: string;
  reason: string;
}

@Component({
  selector: 'app-agent-closed-accounts',
  templateUrl: './agent-closed-accounts.component.html',
  styleUrls: ['./agent-closed-accounts.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AgentClosedAccountsComponent implements OnInit {
  allClosedAccounts: AgentClosedAccount[] = [
    { id: 1, name: 'Thomas Anderson', email: 'thomas.anderson@example.com', closureDate: '2024-11-25', reason: 'Requested by user' },
    { id: 2, name: 'Patricia Martinez', email: 'patricia.martinez@example.com', closureDate: '2024-11-26', reason: 'Inactivity' },
    { id: 3, name: 'Christopher Lee', email: 'christopher.lee@example.com', closureDate: '2024-11-27', reason: 'Business closed' },
    { id: 4, name: 'Jennifer Garcia', email: 'jennifer.garcia@example.com', closureDate: '2024-11-28', reason: 'Duplicate account' },
    { id: 5, name: 'Daniel Kim', email: 'daniel.kim@example.com', closureDate: '2024-11-29', reason: 'Violation of terms' },
  ];

  closedAccounts: AgentClosedAccount[] = [];
  pagedClosedAccounts: AgentClosedAccount[] = [];
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

