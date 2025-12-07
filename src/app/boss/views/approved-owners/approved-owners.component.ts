import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ApprovedOwner {
  id: number;
  signupDateTime: Date;
  name: string;
  email: string;
  mobile: string;
  country: string;
  city: string;
  lastActive: Date;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-approved-owners',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approved-owners.component.html',
  styleUrls: ['./approved-owners.component.scss']
})
export class ApprovedOwnersComponent implements OnInit {
  allApprovedOwners: ApprovedOwner[] = [
    {
      id: 1,
      signupDateTime: new Date('2024-11-15T10:30:00'),
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      mobile: '+234 810 123 4567',
      country: 'Nigeria',
      city: 'Lagos',
      lastActive: new Date('2024-12-07T14:30:00'),
      status: 'Active'
    },
    {
      id: 2,
      signupDateTime: new Date('2024-11-20T14:20:00'),
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      mobile: '+234 810 234 5678',
      country: 'Nigeria',
      city: 'Abuja',
      lastActive: new Date('2024-12-06T09:15:00'),
      status: 'Active'
    },
    {
      id: 3,
      signupDateTime: new Date('2024-11-25T09:15:00'),
      name: 'David Brown',
      email: 'david.brown@example.com',
      mobile: '+234 810 345 6789',
      country: 'Nigeria',
      city: 'Port Harcourt',
      lastActive: new Date('2024-12-05T16:45:00'),
      status: 'Inactive'
    },
    {
      id: 4,
      signupDateTime: new Date('2024-11-28T16:45:00'),
      name: 'Lisa Anderson',
      email: 'lisa.anderson@example.com',
      mobile: '+234 810 456 7890',
      country: 'Nigeria',
      city: 'Ibadan',
      lastActive: new Date('2024-12-07T11:20:00'),
      status: 'Active'
    },
    {
      id: 5,
      signupDateTime: new Date('2024-12-01T11:00:00'),
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      mobile: '+234 810 567 8901',
      country: 'Nigeria',
      city: 'Kano',
      lastActive: new Date('2024-12-04T13:10:00'),
      status: 'Inactive'
    },
    {
      id: 6,
      signupDateTime: new Date('2024-12-02T08:30:00'),
      name: 'Robert Taylor',
      email: 'robert.taylor@example.com',
      mobile: '+234 810 678 9012',
      country: 'Nigeria',
      city: 'Enugu',
      lastActive: new Date('2024-12-07T15:45:00'),
      status: 'Active'
    }
  ];

  approvedOwners: ApprovedOwner[] = [];
  filteredOwners: ApprovedOwner[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredOwners = this.allApprovedOwners;

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
    this.approvedOwners = this.filteredOwners.slice(startIndex, endIndex);
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

  toggleStatus(item: ApprovedOwner): void {
    item.status = item.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${item.name} status is now ${item.status}.`);
    this.applyFilters();
  }

  viewEmailHistory(item: ApprovedOwner): void {
    alert(`Email history for ${item.email} will be displayed here.`);
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

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
}

