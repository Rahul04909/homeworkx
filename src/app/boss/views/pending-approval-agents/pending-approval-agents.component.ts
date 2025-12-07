import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PendingAgent {
  id: number;
  signupDateTime: Date;
  delayTime: string; // HH:MM format
  name: string;
  email: string;
  mobile: string;
  businessName: string;
  businessAddress: string;
  country: string;
  city: string;
  state: string;
  zipcode: string;
  businessId: string;
  businessTaxDetails: string;
}

@Component({
  selector: 'app-pending-approval-agents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pending-approval-agents.component.html',
  styleUrls: ['./pending-approval-agents.component.scss']
})
export class PendingApprovalAgentsComponent implements OnInit {
  allPendingAgents: PendingAgent[] = [
    {
      id: 1,
      signupDateTime: new Date('2024-12-01T10:30:00'),
      delayTime: '48:30',
      name: 'Thomas Anderson',
      email: 'thomas.anderson@example.com',
      mobile: '+234 810 123 4567',
      businessName: 'Premium Realty Services',
      businessAddress: '123 Main Street, Victoria Island',
      country: 'Nigeria',
      city: 'Lagos',
      state: 'Lagos State',
      zipcode: '101001',
      businessId: 'RC-123456',
      businessTaxDetails: 'TIN-987654321'
    },
    {
      id: 2,
      signupDateTime: new Date('2024-12-02T14:20:00'),
      delayTime: '24:15',
      name: 'Patricia Martinez',
      email: 'patricia.martinez@example.com',
      mobile: '+234 810 234 5678',
      businessName: 'Elite Property Solutions',
      businessAddress: '456 Business District, Wuse 2',
      country: 'Nigeria',
      city: 'Abuja',
      state: 'FCT',
      zipcode: '900001',
      businessId: 'RC-234567',
      businessTaxDetails: 'TIN-987654322'
    },
    {
      id: 3,
      signupDateTime: new Date('2024-12-03T09:15:00'),
      delayTime: '72:45',
      name: 'Christopher Lee',
      email: 'christopher.lee@example.com',
      mobile: '+234 810 345 6789',
      businessName: 'Prime Real Estate Agency',
      businessAddress: '789 Commercial Avenue, GRA',
      country: 'Nigeria',
      city: 'Port Harcourt',
      state: 'Rivers State',
      zipcode: '500001',
      businessId: 'RC-345678',
      businessTaxDetails: 'TIN-987654323'
    },
    {
      id: 4,
      signupDateTime: new Date('2024-12-04T16:45:00'),
      delayTime: '12:30',
      name: 'Jennifer Garcia',
      email: 'jennifer.garcia@example.com',
      mobile: '+234 810 456 7890',
      businessName: 'Smart Property Management',
      businessAddress: '321 Market Road, Bodija',
      country: 'Nigeria',
      city: 'Ibadan',
      state: 'Oyo State',
      zipcode: '200001',
      businessId: 'RC-456789',
      businessTaxDetails: 'TIN-987654324'
    },
    {
      id: 5,
      signupDateTime: new Date('2024-12-05T11:00:00'),
      delayTime: '36:20',
      name: 'Daniel Kim',
      email: 'daniel.kim@example.com',
      mobile: '+234 810 567 8901',
      businessName: 'Global Realty Partners',
      businessAddress: '654 Trade Center, Sabon Gari',
      country: 'Nigeria',
      city: 'Kano',
      state: 'Kano State',
      zipcode: '700001',
      businessId: 'RC-567890',
      businessTaxDetails: 'TIN-987654325'
    }
  ];

  pendingAgents: PendingAgent[] = [];
  filteredAgents: PendingAgent[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredAgents = this.allPendingAgents;

    if (this.searchTerm) {
      this.filteredAgents = this.filteredAgents.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.mobile.includes(this.searchTerm) ||
        item.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.businessName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.businessId.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.calculatePagination();
    this.getPaginatedItems();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredAgents.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 1;
    }
  }

  getPaginatedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pendingAgents = this.filteredAgents.slice(startIndex, endIndex);
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

  deleteAgent(item: PendingAgent): void {
    if (confirm(`Are you sure you want to delete agent ${item.name}?`)) {
      const index = this.allPendingAgents.findIndex(p => p.id === item.id);
      if (index > -1) {
        this.allPendingAgents.splice(index, 1);
        this.currentPage = 1;
        this.applyFilters();
        alert(`${item.name} deleted successfully.`);
      }
    }
  }

  approveAgent(item: PendingAgent): void {
    if (confirm(`Are you sure you want to approve agent ${item.name}?`)) {
      const index = this.allPendingAgents.findIndex(p => p.id === item.id);
      if (index > -1) {
        this.allPendingAgents.splice(index, 1);
        this.currentPage = 1;
        this.applyFilters();
        alert(`${item.name} approved successfully and moved to approved agents.`);
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

