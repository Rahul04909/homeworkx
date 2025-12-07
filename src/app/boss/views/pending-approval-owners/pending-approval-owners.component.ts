import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PendingOwner {
  id: number;
  signupDateTime: Date;
  delayTime: string; // HH:MM format
  name: string;
  email: string;
  mobile: string;
  country: string;
  city: string;
}

@Component({
  selector: 'app-pending-approval-owners',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pending-approval-owners.component.html',
  styleUrls: ['./pending-approval-owners.component.scss']
})
export class PendingApprovalOwnersComponent implements OnInit {
  allPendingOwners: PendingOwner[] = [
    {
      id: 1,
      signupDateTime: new Date('2024-12-01T10:30:00'),
      delayTime: '48:30',
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      mobile: '+234 810 123 4567',
      country: 'Nigeria',
      city: 'Lagos'
    },
    {
      id: 2,
      signupDateTime: new Date('2024-12-02T14:20:00'),
      delayTime: '24:15',
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      mobile: '+234 810 234 5678',
      country: 'Nigeria',
      city: 'Abuja'
    },
    {
      id: 3,
      signupDateTime: new Date('2024-12-03T09:15:00'),
      delayTime: '72:45',
      name: 'David Brown',
      email: 'david.brown@example.com',
      mobile: '+234 810 345 6789',
      country: 'Nigeria',
      city: 'Port Harcourt'
    },
    {
      id: 4,
      signupDateTime: new Date('2024-12-04T16:45:00'),
      delayTime: '12:30',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@example.com',
      mobile: '+234 810 456 7890',
      country: 'Nigeria',
      city: 'Ibadan'
    },
    {
      id: 5,
      signupDateTime: new Date('2024-12-05T11:00:00'),
      delayTime: '36:20',
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      mobile: '+234 810 567 8901',
      country: 'Nigeria',
      city: 'Kano'
    }
  ];

  pendingOwners: PendingOwner[] = [];
  filteredOwners: PendingOwner[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredOwners = this.allPendingOwners;

    if (this.searchTerm) {
      this.filteredOwners = this.filteredOwners.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.mobile.includes(this.searchTerm) ||
        item.city.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.calculatePagination();
    this.getPaginatedItems();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredOwners.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 1;
    }
  }

  getPaginatedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pendingOwners = this.filteredOwners.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPaginatedItems();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getPaginatedItems();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPaginatedItems();
    }
  }

  deleteOwner(item: PendingOwner): void {
    if (confirm(`Are you sure you want to delete owner ${item.name}?`)) {
      const index = this.allPendingOwners.findIndex(p => p.id === item.id);
      if (index > -1) {
        this.allPendingOwners.splice(index, 1);
        this.currentPage = 1;
        this.applyFilters();
        alert(`${item.name} deleted successfully.`);
      }
    }
  }

  approveOwner(item: PendingOwner): void {
    if (confirm(`Are you sure you want to approve owner ${item.name}?`)) {
      const index = this.allPendingOwners.findIndex(p => p.id === item.id);
      if (index > -1) {
        this.allPendingOwners.splice(index, 1);
        this.currentPage = 1;
        this.applyFilters();
        alert(`${item.name} approved successfully and moved to approved owners.`);
      }
    }
  }

  formatDateTime(date: Date): string {
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }
}

