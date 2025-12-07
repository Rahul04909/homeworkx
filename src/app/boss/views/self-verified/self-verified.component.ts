import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SelfVerified {
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
  selector: 'app-self-verified',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './self-verified.component.html',
  styleUrls: ['./self-verified.component.scss']
})
export class SelfVerifiedComponent implements OnInit {
  allSelfVerified: SelfVerified[] = [
    {
      id: 1,
      signupDateTime: new Date('2024-11-15T10:30:00'),
      name: 'John Doe',
      email: 'john.doe@example.com',
      mobile: '+234 810 123 4567',
      country: 'Nigeria',
      city: 'Lagos',
      lastActive: new Date('2024-12-07T14:30:00'),
      status: 'Active'
    },
    {
      id: 2,
      signupDateTime: new Date('2024-11-20T14:20:00'),
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobile: '+234 810 234 5678',
      country: 'Nigeria',
      city: 'Abuja',
      lastActive: new Date('2024-12-06T09:15:00'),
      status: 'Active'
    },
    {
      id: 3,
      signupDateTime: new Date('2024-11-25T09:15:00'),
      name: 'Peter Jones',
      email: 'peter.jones@example.com',
      mobile: '+234 810 345 6789',
      country: 'Nigeria',
      city: 'Port Harcourt',
      lastActive: new Date('2024-12-05T16:45:00'),
      status: 'Inactive'
    },
    {
      id: 4,
      signupDateTime: new Date('2024-11-28T16:45:00'),
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      mobile: '+234 810 456 7890',
      country: 'Nigeria',
      city: 'Ibadan',
      lastActive: new Date('2024-12-07T11:20:00'),
      status: 'Active'
    },
    {
      id: 5,
      signupDateTime: new Date('2024-12-01T11:00:00'),
      name: 'Robert Davis',
      email: 'robert.davis@example.com',
      mobile: '+234 810 567 8901',
      country: 'Nigeria',
      city: 'Kano',
      lastActive: new Date('2024-12-04T13:10:00'),
      status: 'Inactive'
    },
    {
      id: 6,
      signupDateTime: new Date('2024-12-02T08:30:00'),
      name: 'Emily White',
      email: 'emily.white@example.com',
      mobile: '+234 810 678 9012',
      country: 'Nigeria',
      city: 'Enugu',
      lastActive: new Date('2024-12-07T15:45:00'),
      status: 'Active'
    }
  ];

  selfVerified: SelfVerified[] = [];
  filteredVerified: SelfVerified[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  showAddModal: boolean = false;
  showEditModal: boolean = false;
  showCloseModal: boolean = false;
  selectedItem: SelfVerified | null = null;
  newItem: SelfVerified = {
    id: 0,
    signupDateTime: new Date(),
    name: '',
    email: '',
    mobile: '',
    country: 'Nigeria',
    city: '',
    lastActive: new Date(),
    status: 'Active'
  };

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredVerified = this.allSelfVerified;

    if (this.searchTerm) {
      this.filteredVerified = this.filteredVerified.filter(item =>
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
    this.totalPages = Math.ceil(this.filteredVerified.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 1;
    }
  }

  getPaginatedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.selfVerified = this.filteredVerified.slice(startIndex, endIndex);
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

  toggleStatus(item: SelfVerified): void {
    item.status = item.status === 'Active' ? 'Inactive' : 'Active';
    alert(`${item.name} status is now ${item.status}.`);
    this.applyFilters();
  }

  viewEmailHistory(item: SelfVerified): void {
    alert(`Email history for ${item.email} will be displayed here.`);
  }

  addItem(): void {
    this.newItem = {
      id: this.allSelfVerified.length + 1,
      signupDateTime: new Date(),
      name: '',
      email: '',
      mobile: '',
      country: 'Nigeria',
      city: '',
      lastActive: new Date(),
      status: 'Active'
    };
    this.showAddModal = true;
  }

  saveAdd(): void {
    if (this.newItem.name && this.newItem.email && this.newItem.mobile && this.newItem.city) {
      this.allSelfVerified.push({ ...this.newItem });
      this.showAddModal = false;
      this.currentPage = 1; // Reset to first page after adding
      this.applyFilters();
      alert('New verified customer added successfully.');
    } else {
      alert('Please fill all required fields.');
    }
  }

  editItem(item: SelfVerified): void {
    this.selectedItem = { ...item };
    this.showEditModal = true;
  }

  saveEdit(): void {
    if (this.selectedItem) {
      const index = this.allSelfVerified.findIndex(p => p.id === this.selectedItem!.id);
      if (index > -1) {
        this.allSelfVerified[index] = { ...this.selectedItem };
        this.showEditModal = false;
        this.selectedItem = null;
        this.applyFilters();
        alert('Customer updated successfully.');
      }
    }
  }

  closeItem(item: SelfVerified): void {
    this.selectedItem = item;
    this.showCloseModal = true;
  }

  confirmClose(): void {
    if (this.selectedItem) {
      const index = this.allSelfVerified.findIndex(p => p.id === this.selectedItem!.id);
      if (index > -1) {
        this.allSelfVerified.splice(index, 1);
        this.showCloseModal = false;
        this.selectedItem = null;
        this.currentPage = 1; // Reset to first page after closing
        this.applyFilters();
        alert('Customer account closed successfully.');
      }
    }
  }

  cancelModal(): void {
    this.showAddModal = false;
    this.showEditModal = false;
    this.showCloseModal = false;
    this.selectedItem = null;
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

