import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PendingVerification {
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
  selector: 'app-pending-self-verification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pending-self-verification.component.html',
  styleUrls: ['./pending-self-verification.component.scss']
})
export class PendingSelfVerificationComponent implements OnInit {
  allPendingVerifications: PendingVerification[] = [
    {
      id: 1,
      signupDateTime: new Date('2024-12-01T10:30:00'),
      delayTime: '48:30',
      name: 'John Doe',
      email: 'john.doe@example.com',
      mobile: '+234 810 123 4567',
      country: 'Nigeria',
      city: 'Lagos'
    },
    {
      id: 2,
      signupDateTime: new Date('2024-12-02T14:20:00'),
      delayTime: '24:15',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobile: '+234 810 234 5678',
      country: 'Nigeria',
      city: 'Abuja'
    },
    {
      id: 3,
      signupDateTime: new Date('2024-12-03T09:15:00'),
      delayTime: '72:45',
      name: 'Peter Jones',
      email: 'peter.jones@example.com',
      mobile: '+234 810 345 6789',
      country: 'Nigeria',
      city: 'Port Harcourt'
    },
    {
      id: 4,
      signupDateTime: new Date('2024-12-04T16:45:00'),
      delayTime: '12:30',
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      mobile: '+234 810 456 7890',
      country: 'Nigeria',
      city: 'Ibadan'
    },
    {
      id: 5,
      signupDateTime: new Date('2024-12-05T11:00:00'),
      delayTime: '36:20',
      name: 'Robert Davis',
      email: 'robert.davis@example.com',
      mobile: '+234 810 567 8901',
      country: 'Nigeria',
      city: 'Kano'
    }
  ];

  pendingVerifications: PendingVerification[] = [];
  filteredVerifications: PendingVerification[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredVerifications = this.allPendingVerifications;

    if (this.searchTerm) {
      this.filteredVerifications = this.filteredVerifications.filter(item =>
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
    this.totalPages = Math.ceil(this.filteredVerifications.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 1;
    }
  }

  getPaginatedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pendingVerifications = this.filteredVerifications.slice(startIndex, endIndex);
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

  deleteVerification(item: PendingVerification): void {
    if (confirm(`Are you sure you want to delete verification for ${item.name}?`)) {
      const index = this.allPendingVerifications.findIndex(p => p.id === item.id);
      if (index > -1) {
        this.allPendingVerifications.splice(index, 1);
        this.currentPage = 1; // Reset to first page after deletion
        this.applyFilters();
        alert(`${item.name} verification deleted successfully.`);
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

