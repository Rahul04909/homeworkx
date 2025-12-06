import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-lease',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './lease.html',
  styleUrl: './lease.css',
})
export class Lease {
  listings = [
    { id: 1, title: 'Office Lease 300sqm', city: 'Lagos', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 15000000, image: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Warehouse 1200sqm', city: 'Abuja', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 8000000, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Retail Space 80sqm', city: 'Lagos', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 3000000, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Serviced Office 100sqm', city: 'Abuja', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 5500000, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'Studio Space 60sqm', city: 'Lagos', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 2200000, image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Clinic Space 150sqm', city: 'Port Harcourt', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 9000000, image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop' },
    { id: 7, title: 'Event Hall 500sqm', city: 'Lagos', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 7000000, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1600&auto=format&fit=crop' },
    { id: 8, title: 'Open Plan Office 200sqm', city: 'Abuja', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 10000000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop' },
    { id: 9, title: 'Showroom 150sqm', city: 'Ibadan', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 4500000, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
    { id: 10, title: 'Logistics Hub 800sqm', city: 'Lagos', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 20000000, image: 'https://images.unsplash.com/photo-1523419409543-a6c0df4c3ee0?q=80&w=1600&auto=format&fit=crop' },
    { id: 11, title: 'Training Center 120sqm', city: 'Abuja', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 3500000, image: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?q=80&w=1600&auto=format&fit=crop' },
    { id: 12, title: 'Tech Office 150sqm', city: 'Lagos', type: 'Commercial', status: 'Lease', bedrooms: 0, price: 11000000, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' }
  ];
  filters = { city: '', type: '', status: '', minPrice: 0, maxPrice: 1000000000, bedrooms: 0 };
  cities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu'];
  types = ['Commercial'];
  statuses = ['Lease'];
  pageSize = 6;
  currentPage = 1;
  filteredListings = this.listings;
  applyFilters() {
    const f = this.filters;
    this.filteredListings = this.listings.filter(x =>
      (f.city ? x.city === f.city : true) &&
      (f.type ? x.type === f.type : true) &&
      (f.status ? x.status === f.status : true) &&
      x.price >= f.minPrice && x.price <= f.maxPrice &&
      x.bedrooms >= f.bedrooms
    );
    this.currentPage = 1;
  }
  totalPages() { return Math.max(1, Math.ceil(this.filteredListings.length / this.pageSize)); }
  visibleListings() { const start = (this.currentPage - 1) * this.pageSize; return this.filteredListings.slice(start, start + this.pageSize); }
  goToPage(p: number) { if (p < 1 || p > this.totalPages()) return; this.currentPage = p; }
  prev() { this.goToPage(this.currentPage - 1); }
  next() { this.goToPage(this.currentPage + 1); }
  formatPrice(n: number) { return '₦' + Math.round(n).toLocaleString('en-NG'); }
}
