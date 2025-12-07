import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule, ButtonModule } from '@coreui/angular';

interface ApprovedAgent {
  id: number;
  signupDateTime: Date;
  name: string;
  email: string;
  mobile: string;
  businessName: string;
  businessAddress: string;
  country: string;
  city: string;
  zipcode: string;
  businessId: string;
  businessTaxDetails: string;
  lastActive: Date;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-approved-agents',
  standalone: true,
  imports: [CommonModule, FormsModule, BadgeModule, ButtonModule],
  templateUrl: './approved-agents.component.html',
  styleUrls: ['./approved-agents.component.scss']
})
export class ApprovedAgentsComponent implements OnInit {
  allApprovedAgents: ApprovedAgent[] = [
    {
      id: 1,
      signupDateTime: new Date('2024-11-15T10:30:00'),
      name: 'Thomas Anderson',
      email: 'thomas.anderson@example.com',
      mobile: '+234 810 123 4567',
      businessName: 'Premium Realty Services',
      businessAddress: '123 Main Street, Victoria Island',
      country: 'Nigeria',
      city: 'Lagos',
      zipcode: '101001',
      businessId: 'RC-123456',
      businessTaxDetails: 'TIN-987654321',
      lastActive: new Date('2024-12-07T14:30:00'),
      status: 'Active'
    },
    {
      id: 2,
      signupDateTime: new Date('2024-11-20T14:20:00'),
      name: 'Patricia Martinez',
      email: 'patricia.martinez@example.com',
      mobile: '+234 810 234 5678',
      businessName: 'Elite Property Solutions',
      businessAddress: '456 Business District, Wuse 2',
      country: 'Nigeria',
      city: 'Abuja',
      zipcode: '900001',
      businessId: 'RC-234567',
      businessTaxDetails: 'TIN-987654322',
      lastActive: new Date('2024-12-06T09:15:00'),
      status: 'Active'
    },
    {
      id: 3,
      signupDateTime: new Date('2024-11-25T09:15:00'),
      name: 'Christopher Lee',
      email: 'christopher.lee@example.com',
      mobile: '+234 810 345 6789',
      businessName: 'Prime Real Estate Agency',
      businessAddress: '789 Commercial Avenue, GRA',
      country: 'Nigeria',
      city: 'Port Harcourt',
      zipcode: '500001',
      businessId: 'RC-345678',
      businessTaxDetails: 'TIN-987654323',
      lastActive: new Date('2024-12-05T16:45:00'),
      status: 'Inactive'
    },
    {
      id: 4,
      signupDateTime: new Date('2024-11-28T16:45:00'),
      name: 'Jennifer Garcia',
      email: 'jennifer.garcia@example.com',
      mobile: '+234 810 456 7890',
      businessName: 'Smart Property Management',
      businessAddress: '321 Market Road, Bodija',
      country: 'Nigeria',
      city: 'Ibadan',
      zipcode: '200001',
      businessId: 'RC-456789',
      businessTaxDetails: 'TIN-987654324',
      lastActive: new Date('2024-12-07T11:20:00'),
      status: 'Active'
    },
    {
      id: 5,
      signupDateTime: new Date('2024-12-01T11:00:00'),
      name: 'Daniel Kim',
      email: 'daniel.kim@example.com',
      mobile: '+234 810 567 8901',
      businessName: 'Global Realty Partners',
      businessAddress: '654 Trade Center, Sabon Gari',
      country: 'Nigeria',
      city: 'Kano',
      zipcode: '700001',
      businessId: 'RC-567890',
      businessTaxDetails: 'TIN-987654325',
      lastActive: new Date('2024-12-04T13:10:00'),
      status: 'Inactive'
    },
    {
      id: 6,
      signupDateTime: new Date('2024-12-02T08:30:00'),
      name: 'Amanda White',
      email: 'amanda.white@example.com',
      mobile: '+234 810 678 9012',
      businessName: 'City Property Experts',
      businessAddress: '987 Urban Plaza, Independence Layout',
      country: 'Nigeria',
      city: 'Enugu',
      zipcode: '400001',
      businessId: 'RC-678901',
      businessTaxDetails: 'TIN-987654326',
      lastActive: new Date('2024-12-07T15:45:00'),
      status: 'Active'
    }
  ];

  approvedAgents: ApprovedAgent[] = [];
  filteredAgents: ApprovedAgent[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredAgents = this.allApprovedAgents;

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
    this.approvedAgents = this.filteredAgents.slice(startIndex, endIndex);
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

  toggleStatus(item: ApprovedAgent): void {
    item.status = item.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${item.name} status is now ${item.status}.`);
    this.applyFilters();
  }

  viewEmailHistory(item: ApprovedAgent): void {
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

