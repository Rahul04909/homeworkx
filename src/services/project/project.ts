import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  listings = [
    { id: 1, title: 'Interior Upgrade Package', city: 'Lagos', type: 'Interior', status: 'Service', bedrooms: 0, price: 1500000, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Solar Panel Installation', city: 'Abuja', type: 'Energy', status: 'Service', bedrooms: 0, price: 2200000, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Security System Setup', city: 'Lagos', type: 'Security', status: 'Service', bedrooms: 0, price: 900000, image: 'https://images.unsplash.com/photo-1505691723518-32f15e7b5b3d?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Furniture & Fit‑out', city: 'Port Harcourt', type: 'Interior', status: 'Service', bedrooms: 0, price: 1800000, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'Renovation & Repairs', city: 'Lagos', type: 'Renovation', status: 'Service', bedrooms: 0, price: 2500000, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Office Setup Package', city: 'Abuja', type: 'Interior', status: 'Service', bedrooms: 0, price: 3200000, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop' },
    { id: 7, title: 'Inverter System', city: 'Lagos', type: 'Energy', status: 'Service', bedrooms: 0, price: 1400000, image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop' },
    { id: 8, title: 'Smart Home Upgrade', city: 'Abuja', type: 'Security', status: 'Service', bedrooms: 0, price: 2700000, image: 'https://images.unsplash.com/photo-1523419409543-a6c0df4c3ee0?q=80&w=1600&auto=format&fit=crop' },
    { id: 9, title: 'Exterior Landscaping', city: 'Lagos', type: 'Renovation', status: 'Service', bedrooms: 0, price: 1300000, image: 'https://images.unsplash.com/photo-1590926938512-05a26be0f2c2?q=80&w=1600&auto=format&fit=crop' },
    { id: 10, title: 'Lighting Upgrade', city: 'Ibadan', type: 'Interior', status: 'Service', bedrooms: 0, price: 800000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop' },
    { id: 11, title: 'Conference Room Setup', city: 'Lagos', type: 'Interior', status: 'Service', bedrooms: 0, price: 2100000, image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop' },
    { id: 12, title: 'General Maintenance', city: 'Abuja', type: 'Renovation', status: 'Service', bedrooms: 0, price: 600000, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' }
  ];
  filters = { city: '', type: '', status: '', minPrice: 0, maxPrice: 1000000000, bedrooms: 0 };
  cities = ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu'];
  types = ['Interior', 'Energy', 'Security', 'Renovation'];
  statuses = ['Service'];
  pageSize = 6;
  currentPage = 1;
  filteredListings = this.listings;
  applyFilters() {
    const f = this.filters;
    this.filteredListings = this.listings.filter(x =>
      (f.city ? x.city === f.city : true) &&
      (f.type ? x.type === f.type : true) &&
      (f.status ? x.status === f.status : true) &&
      x.price >= f.minPrice && x.price <= f.maxPrice
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
