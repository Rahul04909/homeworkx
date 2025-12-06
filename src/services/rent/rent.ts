import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './rent.html',
  styleUrl: './rent.css',
})
export class Rent {
  listings = [
    { id: 1, title: '1BR Apartment, Yaba', city: 'Lagos', type: 'Apartment', status: 'For Rent', bedrooms: 1, price: 350000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: '2BR Apartment, Lekki', city: 'Lagos', type: 'Apartment', status: 'For Rent', bedrooms: 2, price: 850000, image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Studio, Surulere', city: 'Lagos', type: 'Apartment', status: 'For Rent', bedrooms: 1, price: 280000, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: '3BR Terrace, Abuja', city: 'Abuja', type: 'Terrace', status: 'For Rent', bedrooms: 3, price: 1300000, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'Office, Ikeja 100sqm', city: 'Lagos', type: 'Commercial', status: 'For Rent', bedrooms: 0, price: 2500000, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: '2BR Apartment, GRA PH', city: 'Port Harcourt', type: 'Apartment', status: 'For Rent', bedrooms: 2, price: 900000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop' },
    { id: 7, title: '1BR Flat, Ibadan', city: 'Ibadan', type: 'Apartment', status: 'For Rent', bedrooms: 1, price: 320000, image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop' },
    { id: 8, title: '3BR Apartment, Wuse', city: 'Abuja', type: 'Apartment', status: 'For Rent', bedrooms: 3, price: 1700000, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
    { id: 9, title: 'Shop, Ikorodu', city: 'Lagos', type: 'Commercial', status: 'For Rent', bedrooms: 0, price: 650000, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
    { id: 10, title: '2BR Apartment, Enugu', city: 'Enugu', type: 'Apartment', status: 'For Rent', bedrooms: 2, price: 500000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop' },
    { id: 11, title: 'Studio, Victoria Island', city: 'Lagos', type: 'Apartment', status: 'For Rent', bedrooms: 0, price: 600000, image: 'https://images.unsplash.com/photo-1590926938512-05a26be0f2c2?q=80&w=1600&auto=format&fit=crop' },
    { id: 12, title: 'Office, Abuja 150sqm', city: 'Abuja', type: 'Commercial', status: 'For Rent', bedrooms: 0, price: 3000000, image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop' }
  ];
  filters = { city: '', type: '', status: '', minPrice: 0, maxPrice: 1000000000, bedrooms: 0 };
  cities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu'];
  types = ['Apartment', 'Terrace', 'Commercial'];
  statuses = ['For Rent'];
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
