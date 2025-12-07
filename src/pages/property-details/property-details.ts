import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  minPrice?: number;
  maxPrice?: number;
  image: string;
  images?: string[];
  featured?: boolean;
  description?: string;
  amenities?: string[];
  yearBuilt?: number;
  parking?: number;
  furnished?: boolean;
  agentName?: string;
  agentPhone?: string;
  agentEmail?: string;
  agentCompany?: string;
  nearbyPlaces?: { name: string; distance: string }[];
  whyConsider?: string[];
  reraRegistered?: boolean;
  possessionStatus?: string;
  investmentOptions?: { type: string; minPrice: number; maxPrice: number }[];
  unitsAvailable?: { type: string; area: number; price: number }[];
  developerName?: string;
  developerLogo?: string;
  developerDescription?: string;
  developerProjects?: { id: number; name: string; image: string; priceRange: string }[];
  resaleProperties?: { id: number; image: string; price: number; area: number }[];
  similarProjects?: { id: number; name: string; image: string; location: string; price: string }[];
  faqs?: { question: string; answer: string }[];
  isFavorite?: boolean;
}

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, Header, Footer],
  templateUrl: './property-details.html',
  styleUrl: './property-details.css',
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | null = null;
  selectedImageIndex = 0;
  showAllAmenities = false;
  showAllFacilities = false;
  expandedFaq: number | null = null;
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  // Sample properties database
  propertiesDatabase: Property[] = [
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
      images: [
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'https://images.unsplash.com/photo-1599423300746-b62533397364',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      featured: true,
      description: 'This stunning 3-bedroom apartment offers modern luxury living in the heart of Lekki Phase 1. The property features spacious rooms, high-end finishes, and premium amenities. Perfect for families or professionals seeking comfort and style. The apartment includes a fully equipped kitchen, elegant living areas, and private balconies with beautiful views. Located in one of Lagos most prestigious neighborhoods, this property offers excellent connectivity and proximity to major business districts, shopping malls, and entertainment centers.',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Elevator', '24/7 Power Supply', 'Water Supply', 'WiFi Ready', 'CCTV', 'Playground', 'Clubhouse', 'Landscaped Gardens', 'Concierge Service'],
      yearBuilt: 2020,
      parking: 2,
      furnished: true,
      agentName: 'John Doe',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'john.doe@homeworx.com',
      agentCompany: 'HomeWorx Premium Realty',
      nearbyPlaces: [
        { name: 'Lekki Mall', distance: '0.5 km' },
        { name: 'Lekki Conservation Centre', distance: '2.0 km' },
        { name: 'Lekki Beach', distance: '3.5 km' },
        { name: 'Schools', distance: '1.0 km' },
        { name: 'Hospitals', distance: '2.5 km' },
        { name: 'Business District', distance: '3.0 km' },
        { name: 'Airport', distance: '25 km' }
      ],
      whyConsider: [
        'Prime location in Lekki Phase 1 with excellent connectivity',
        'Modern architecture with premium finishes',
        '24/7 security and power supply',
        'Close to schools, hospitals, and shopping centers',
        'High rental yield potential',
        'Well-maintained building with modern amenities'
      ],
      reraRegistered: true,
      possessionStatus: 'Ready to Move',
      investmentOptions: [
        { type: '3 BHK Apartment', minPrice: 850000, maxPrice: 1200000 },
        { type: '2 BHK Apartment', minPrice: 650000, maxPrice: 850000 }
      ],
      unitsAvailable: [
        { type: '3 BHK', area: 1850, price: 850000 },
        { type: '3 BHK Premium', area: 2200, price: 1200000 },
        { type: '2 BHK', area: 1400, price: 650000 }
      ],
      developerName: 'HomeWorx Developers',
      developerDescription: 'HomeWorx Developers is a leading real estate development company in Nigeria, known for creating premium residential and commercial properties. With over 15 years of experience, we have delivered numerous successful projects across major cities in Nigeria.',
      developerProjects: [
        { id: 11, name: 'HomeWorx Towers', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511', priceRange: '₦850K - ₦1.2M' },
        { id: 12, name: 'Luxury Gardens', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', priceRange: '₦1.5M - ₦2.5M' },
        { id: 13, name: 'Premium Heights', image: 'https://images.unsplash.com/photo-1599423300746-b62533397364', priceRange: '₦2M - ₦3M' }
      ],
      resaleProperties: [
        { id: 101, image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511', price: 820000, area: 1800 },
        { id: 102, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', price: 780000, area: 1750 }
      ],
      similarProjects: [
        { id: 201, name: 'Elite Residences', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', location: 'Lekki Phase 1', price: '₦950K/month' },
        { id: 202, name: 'Grand Towers', image: 'https://images.unsplash.com/photo-1599423300746-b62533397364', location: 'Victoria Island', price: '₦1.1M/month' },
        { id: 203, name: 'Modern Living', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', location: 'Ikoyi', price: '₦1.3M/month' }
      ],
      faqs: [
        { question: 'Where is this property located?', answer: 'The property is located in Lekki Phase 1, Lagos, one of the most prestigious and well-connected areas in Lagos. It offers excellent connectivity to major business districts, shopping malls, and entertainment centers.' },
        { question: 'What are the property types available?', answer: 'We have 2 BHK and 3 BHK apartments available for rent. The 3 BHK apartments range from 1850 sqft to 2200 sqft, while 2 BHK apartments are around 1400 sqft.' },
        { question: 'Is the property RERA registered?', answer: 'Yes, this property is RERA registered and complies with all regulatory requirements. All necessary approvals and certifications are in place.' },
        { question: 'What is the possession status?', answer: 'The property is ready to move in. Immediate possession is available for all units.' },
        { question: 'What amenities are available?', answer: 'The property offers premium amenities including swimming pool, gym, parking, 24/7 security, elevator, power supply, water supply, WiFi ready, CCTV, playground, clubhouse, and landscaped gardens.' },
        { question: 'Are pets allowed?', answer: 'Yes, pets are allowed in the property. However, certain restrictions may apply. Please contact the property manager for more details.' }
      ],
      isFavorite: false
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
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
      ],
      featured: false,
      description: 'Exclusive villa in the prestigious Banana Island area. This property offers ultimate luxury with spacious interiors, private garden, and premium finishes throughout.',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Home Theater', '24/7 Power Supply'],
      yearBuilt: 2018,
      parking: 4,
      furnished: true,
      agentName: 'Jane Smith',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'jane.smith@homeworx.com',
      nearbyPlaces: [
        { name: 'Shopping Centers', distance: '1.0 km' },
        { name: 'Restaurants', distance: '0.8 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
      ],
      featured: false,
      description: 'Cozy and well-maintained apartment in a prime location. Perfect for young professionals or small families.',
      amenities: ['Parking', 'Security', 'Elevator', '24/7 Power Supply'],
      yearBuilt: 2019,
      parking: 1,
      furnished: false,
      agentName: 'Mike Johnson',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'mike.johnson@homeworx.com',
      nearbyPlaces: [
        { name: 'Ikeja City Mall', distance: '1.5 km' },
        { name: 'Airport', distance: '5.0 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1599423300746-b62533397364',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
      ],
      featured: true,
      description: 'Luxurious penthouse with panoramic views of the city. This stunning property features high-end finishes, spacious rooms, and premium amenities. Perfect for those seeking the ultimate in luxury living.',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Elevator', 'Rooftop', '24/7 Power Supply', 'Water Supply', 'WiFi Ready'],
      yearBuilt: 2021,
      parking: 3,
      furnished: true,
      agentName: 'Sarah Williams',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'sarah.williams@homeworx.com',
      nearbyPlaces: [
        { name: 'Victoria Island Mall', distance: '0.8 km' },
        { name: 'Business District', distance: '1.2 km' },
        { name: 'Restaurants', distance: '0.5 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1505691723518-32f15e7b5b3d',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
      ],
      featured: false,
      description: 'Modern duplex with contemporary design and excellent finishing. Located in a prime area with easy access to major roads and amenities.',
      amenities: ['Parking', 'Security', 'Garden', '24/7 Power Supply'],
      yearBuilt: 2020,
      parking: 2,
      furnished: false,
      agentName: 'David Brown',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'david.brown@homeworx.com',
      nearbyPlaces: [
        { name: 'Shopping Centers', distance: '2.0 km' },
        { name: 'Schools', distance: '1.5 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1590926938512-05a26be0f2c2',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
      ],
      featured: false,
      description: 'Well-maintained terrace house in a prime location. Perfect for families looking for comfort and convenience.',
      amenities: ['Parking', 'Security', '24/7 Power Supply'],
      yearBuilt: 2017,
      parking: 2,
      furnished: true,
      agentName: 'Emily Davis',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'emily.davis@homeworx.com',
      nearbyPlaces: [
        { name: 'Wuse Market', distance: '1.0 km' },
        { name: 'Hospitals', distance: '2.0 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
      ],
      featured: false,
      description: 'Compact studio apartment perfect for singles or young professionals. Fully furnished and ready to move in.',
      amenities: ['Parking', 'Security', '24/7 Power Supply'],
      yearBuilt: 2022,
      parking: 1,
      furnished: true,
      agentName: 'Michael Chen',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'michael.chen@homeworx.com',
      nearbyPlaces: [
        { name: 'Shopping Centers', distance: '0.8 km' },
        { name: 'Transport Hub', distance: '1.2 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1505691723518-32f15e7b5b3d',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        'https://images.unsplash.com/photo-1599423300746-b62533397364'
      ],
      featured: true,
      description: 'Premium luxury duplex with all modern amenities. This exquisite property offers spacious living areas, premium finishes, and a private garden. Perfect for large families or those who love to entertain.',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Home Theater', '24/7 Power Supply', 'Water Supply', 'WiFi Ready', 'CCTV'],
      yearBuilt: 2019,
      parking: 5,
      furnished: true,
      agentName: 'Robert Taylor',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'robert.taylor@homeworx.com',
      nearbyPlaces: [
        { name: 'Premium Shopping', distance: '1.5 km' },
        { name: 'International Schools', distance: '2.0 km' },
        { name: 'Hospitals', distance: '1.8 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
      ],
      featured: false,
      description: 'Charming bungalow in a quiet neighborhood. Perfect for those seeking peace and tranquility away from the city hustle.',
      amenities: ['Parking', 'Garden', '24/7 Power Supply'],
      yearBuilt: 2015,
      parking: 2,
      furnished: false,
      agentName: 'Lisa Anderson',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'lisa.anderson@homeworx.com',
      nearbyPlaces: [
        { name: 'Local Markets', distance: '1.0 km' },
        { name: 'Schools', distance: '1.5 km' }
      ]
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
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511'
      ],
      featured: false,
      description: 'Prime office space in the heart of the business district. Perfect for established businesses looking for a prestigious address.',
      amenities: ['Parking', 'Security', 'Elevator', 'Reception', '24/7 Power Supply', 'WiFi Ready'],
      yearBuilt: 2020,
      parking: 5,
      furnished: false,
      agentName: 'James Wilson',
      agentPhone: '+234 810 697 2330',
      agentEmail: 'james.wilson@homeworx.com',
      nearbyPlaces: [
        { name: 'Business District', distance: '0.3 km' },
        { name: 'Banks', distance: '0.5 km' },
        { name: 'Restaurants', distance: '0.2 km' }
      ]
    }
  ];

  similarProperties: Property[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const propertyId = parseInt(id, 10);
      this.property = this.propertiesDatabase.find(p => p.id === propertyId) || null;
      
      if (this.property) {
        // Get similar properties (same city, different property)
        this.similarProperties = this.propertiesDatabase
          .filter(p => p.id !== propertyId && p.city === this.property!.city)
          .slice(0, 3);
      }
    }
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  previousImage() {
    if (this.property?.images) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.property.images.length) % this.property.images.length;
    }
  }

  nextImage() {
    if (this.property?.images) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.property.images.length;
    }
  }

  formatPrice(price: number): string {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `₦${(price / 1000).toFixed(0)}K`;
    }
    return `₦${price.toLocaleString()}`;
  }

  get displayedAmenities(): string[] {
    if (!this.property?.amenities) return [];
    return this.showAllAmenities ? this.property.amenities : this.property.amenities.slice(0, 6);
  }

  submitContactForm() {
    // Handle form submission
    console.log('Contact form submitted:', this.contactForm);
    alert('Thank you for your inquiry! We will contact you soon.');
    this.contactForm = { name: '', email: '', phone: '', message: '' };
  }

  viewProperty(id: number) {
    this.router.navigate(['/property-details', id]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToContactForm() {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getMapUrl(location: string): string {
    return `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
  }

  toggleFavorite() {
    if (this.property) {
      this.property.isFavorite = !this.property.isFavorite;
    }
  }

  toggleFaq(index: number) {
    this.expandedFaq = this.expandedFaq === index ? null : index;
  }

  downloadPriceList() {
    alert('Price list download will be available soon!');
  }

  shareProperty() {
    if (navigator.share) {
      navigator.share({
        title: this.property?.title,
        text: `Check out this property: ${this.property?.title}`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  }
}
