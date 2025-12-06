import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './sell.html',
  styleUrl: './sell.css',
})
export class Sell {
  listings = [
    { id: 1, title: 'List: 3BR Apartment in Lekki', city: 'Lagos', type: 'Apartment', status: 'For Sale', bedrooms: 3, price: 85000000, image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'List: 4BR Duplex in Ajah', city: 'Lagos', type: 'Duplex', status: 'For Sale', bedrooms: 4, price: 120000000, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'List: Commercial Space VI', city: 'Lagos', type: 'Commercial', status: 'For Sale', bedrooms: 0, price: 450000000, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'List: 2BR Terrace in Yaba', city: 'Lagos', type: 'Terrace', status: 'For Sale', bedrooms: 2, price: 65000000, image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'List: 3BR Bungalow Ibadan', city: 'Ibadan', type: 'Bungalow', status: 'For Sale', bedrooms: 3, price: 40000000, image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'List: Land 450sqm Enugu', city: 'Enugu', type: 'Land', status: 'For Sale', bedrooms: 0, price: 25000000, image: 'https://images.unsplash.com/photo-1523419409543-a6c0df4c3ee0?q=80&w=1600&auto=format&fit=crop' },
    { id: 7, title: 'List: Mixed‑Use Building PH', city: 'Port Harcourt', type: 'Commercial', status: 'For Sale', bedrooms: 0, price: 600000000, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1600&auto=format&fit=crop' },
    { id: 8, title: 'List: 4BR Apartment Ikoyi', city: 'Lagos', type: 'Apartment', status: 'For Sale', bedrooms: 4, price: 210000000, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
    { id: 9, title: 'List: Office 200sqm Abuja', city: 'Abuja', type: 'Commercial', status: 'For Sale', bedrooms: 0, price: 150000000, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop' },
    { id: 10, title: 'List: 3BR Apartment Surulere', city: 'Lagos', type: 'Apartment', status: 'For Sale', bedrooms: 3, price: 75000000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop' },
    { id: 11, title: 'List: 4BR Terrace Ikoyi', city: 'Lagos', type: 'Terrace', status: 'For Sale', bedrooms: 4, price: 260000000, image: 'https://images.unsplash.com/photo-1590926938512-05a26be0f2c2?q=80&w=1600&auto=format&fit=crop' },
    { id: 12, title: 'List: Land 600sqm Abuja', city: 'Abuja', type: 'Land', status: 'For Sale', bedrooms: 0, price: 55000000, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' }
  ];
  filters = { city: '', type: '', status: '', minPrice: 0, maxPrice: 1000000000, bedrooms: 0 };
  cities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu'];
  types = ['Apartment', 'Duplex', 'Terrace', 'Bungalow', 'Land', 'Commercial'];
  statuses = ['For Sale'];
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
