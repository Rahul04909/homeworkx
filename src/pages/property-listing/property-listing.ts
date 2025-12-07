import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

interface Property {
  id: number;
  title: string;
  city: string;
  location: string;
  type: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  image: string;
  images?: string[];
  featured?: boolean;
  description?: string;
  amenities?: string[];
  yearBuilt?: number;
  parking?: number;
  furnished?: boolean;
}

@Component({
  selector: 'app-property-listing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Header, Footer],
  templateUrl: './property-listing.html',
  styleUrl: './property-listing.css',
})
export class PropertyListingComponent implements OnInit {
  properties: Property[] = [
    { 
      id: 1, 
      title: 'Luxury 3-Bedroom Apartment', 
      city: 'Lagos', 
      location: 'Lekki Phase 1, Lagos',
      type: 'Apartment', 
      status: 'For Rent', 
      bedrooms: 3, 
      bathrooms: 2,
      area: 1850,
      price: 850000, 
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
      featured: true,
      description: 'Beautiful modern apartment with stunning views',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Elevator'],
      yearBuilt: 2020,
      parking: 2,
      furnished: true
    },
    { 
      id: 2, 
      title: 'Modern Detached Villa', 
      city: 'Lagos', 
      location: 'Banana Island, Lagos',
      type: 'Villa', 
      status: 'For Rent', 
      bedrooms: 5, 
      bathrooms: 4,
      area: 4200,
      price: 2500000, 
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      featured: false,
      description: 'Spacious villa with private garden',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden'],
      yearBuilt: 2018,
      parking: 4,
      furnished: true
    },
    { 
      id: 3, 
      title: 'Spacious 2-Bedroom Flat', 
      city: 'Lagos', 
      location: 'Ikeja GRA, Lagos',
      type: 'Apartment', 
      status: 'For Rent', 
      bedrooms: 2, 
      bathrooms: 2,
      area: 1200,
      price: 450000, 
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      featured: false,
      description: 'Cozy apartment in prime location',
      amenities: ['Parking', 'Security', 'Elevator'],
      yearBuilt: 2019,
      parking: 1,
      furnished: false
    },
    { 
      id: 4, 
      title: 'Penthouse Suite', 
      city: 'Lagos', 
      location: 'Victoria Island, Lagos',
      type: 'Penthouse', 
      status: 'For Rent', 
      bedrooms: 4, 
      bathrooms: 4,
      area: 3500,
      price: 1800000, 
      image: 'https://images.unsplash.com/photo-1599423300746-b62533397364',
      featured: true,
      description: 'Luxurious penthouse with panoramic views',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Elevator', 'Rooftop'],
      yearBuilt: 2021,
      parking: 3,
      furnished: true
    },
    { 
      id: 5, 
      title: '3BR Duplex in Ajah', 
      city: 'Lagos', 
      location: 'Ajah, Lagos',
      type: 'Duplex', 
      status: 'For Sale', 
      bedrooms: 3, 
      bathrooms: 3,
      area: 2800,
      price: 95000000, 
      image: 'https://images.unsplash.com/photo-1505691723518-32f15e7b5b3d',
      featured: false,
      description: 'Modern duplex with contemporary design',
      amenities: ['Parking', 'Security', 'Garden'],
      yearBuilt: 2020,
      parking: 2,
      furnished: false
    },
    { 
      id: 6, 
      title: '4BR Terrace House', 
      city: 'Abuja', 
      location: 'Wuse 2, Abuja',
      type: 'Terrace', 
      status: 'For Rent', 
      bedrooms: 4, 
      bathrooms: 3,
      area: 2200,
      price: 1300000, 
      image: 'https://images.unsplash.com/photo-1590926938512-05a26be0f2c2',
      featured: false,
      description: 'Well-maintained terrace house',
      amenities: ['Parking', 'Security'],
      yearBuilt: 2017,
      parking: 2,
      furnished: true
    },
    { 
      id: 7, 
      title: 'Studio Apartment', 
      city: 'Lagos', 
      location: 'Surulere, Lagos',
      type: 'Apartment', 
      status: 'For Rent', 
      bedrooms: 1, 
      bathrooms: 1,
      area: 450,
      price: 280000, 
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      featured: false,
      description: 'Compact studio perfect for singles',
      amenities: ['Parking', 'Security'],
      yearBuilt: 2022,
      parking: 1,
      furnished: true
    },
    { 
      id: 8, 
      title: '5BR Luxury Duplex', 
      city: 'Abuja', 
      location: 'Maitama, Abuja',
      type: 'Duplex', 
      status: 'For Sale', 
      bedrooms: 5, 
      bathrooms: 5,
      area: 4800,
      price: 320000000, 
      image: 'https://images.unsplash.com/photo-1505691723518-32f15e7b5b3d',
      featured: true,
      description: 'Premium luxury duplex with all amenities',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Home Theater'],
      yearBuilt: 2019,
      parking: 5,
      furnished: true
    },
    { 
      id: 9, 
      title: '2BR Bungalow', 
      city: 'Ibadan', 
      location: 'Bodija, Ibadan',
      type: 'Bungalow', 
      status: 'For Rent', 
      bedrooms: 2, 
      bathrooms: 2,
      area: 1500,
      price: 350000, 
      image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba',
      featured: false,
      description: 'Charming bungalow in quiet neighborhood',
      amenities: ['Parking', 'Garden'],
      yearBuilt: 2015,
      parking: 2,
      furnished: false
    },
    { 
      id: 10, 
      title: 'Commercial Office Space', 
      city: 'Lagos', 
      location: 'Victoria Island, Lagos',
      type: 'Commercial', 
      status: 'For Rent', 
      bedrooms: 0, 
      bathrooms: 2,
      area: 500,
      price: 3000000, 
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      featured: false,
      description: 'Prime office space in business district',
      amenities: ['Parking', 'Security', 'Elevator', 'Reception'],
      yearBuilt: 2020,
      parking: 5,
      furnished: false
    }
  ];

  filteredProperties: Property[] = [];
  viewMode: 'grid' | 'list' = 'grid';
  sortBy: string = 'price-low';
  
  filters = {
    city: '',
    type: '',
    status: '',
    minPrice: 0,
    maxPrice: 5000000,
    bedrooms: 0,
    furnished: '',
    search: ''
  };

  cities = ['All', 'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 'Enugu'];
  types = ['All', 'Apartment', 'Villa', 'Duplex', 'Terrace', 'Bungalow', 'Penthouse', 'Commercial'];
  statuses = ['All', 'For Rent', 'For Sale'];
  bedroomOptions = [0, 1, 2, 3, 4, 5];

  currentPage = 1;
  pageSize = 9;
  totalPages = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProperties = this.properties.filter(property => {
      const matchesCity = !this.filters.city || this.filters.city === 'All' || property.city === this.filters.city;
      const matchesType = !this.filters.type || this.filters.type === 'All' || property.type === this.filters.type;
      const matchesStatus = !this.filters.status || this.filters.status === 'All' || property.status === this.filters.status;
      const matchesPrice = property.price >= this.filters.minPrice && property.price <= this.filters.maxPrice;
      const matchesBedrooms = this.filters.bedrooms === 0 || property.bedrooms === this.filters.bedrooms;
      const matchesFurnished = !this.filters.furnished || this.filters.furnished === 'All' || 
        (this.filters.furnished === 'Yes' && property.furnished) || 
        (this.filters.furnished === 'No' && !property.furnished);
      const matchesSearch = !this.filters.search || 
        property.title.toLowerCase().includes(this.filters.search.toLowerCase()) ||
        property.location.toLowerCase().includes(this.filters.search.toLowerCase());

      return matchesCity && matchesType && matchesStatus && matchesPrice && matchesBedrooms && matchesFurnished && matchesSearch;
    });

    this.sortProperties();
    this.updatePagination();
  }

  sortProperties() {
    switch(this.sortBy) {
      case 'price-low':
        this.filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        this.filteredProperties.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        this.filteredProperties.sort((a, b) => (b.yearBuilt || 0) - (a.yearBuilt || 0));
        break;
      case 'oldest':
        this.filteredProperties.sort((a, b) => (a.yearBuilt || 0) - (b.yearBuilt || 0));
        break;
      case 'area-high':
        this.filteredProperties.sort((a, b) => b.area - a.area);
        break;
      case 'area-low':
        this.filteredProperties.sort((a, b) => a.area - b.area);
        break;
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProperties.length / this.pageSize);
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
  }

  get paginatedProperties(): Property[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredProperties.slice(start, end);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  viewProperty(id: number) {
    this.router.navigate(['/property-details', id]);
  }

  formatPrice(price: number): string {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `₦${(price / 1000).toFixed(0)}K`;
    }
    return `₦${price.toLocaleString()}`;
  }

  resetFilters() {
    this.filters = {
      city: '',
      type: '',
      status: '',
      minPrice: 0,
      maxPrice: 5000000,
      bedrooms: 0,
      furnished: '',
      search: ''
    };
    this.applyFilters();
  }
}
