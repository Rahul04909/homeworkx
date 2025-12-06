import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [Header, Footer, NgFor],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
  openIndex: number | null = null;
  faqs = [
    { q: 'What is HomeWorkx all about?', a: 'HomeWorkx is a digital real estate platform in Nigeria that connects property buyers, renters, landlords, and service providers, offering verified listings and value-added services like renovation, property management, and easy loans.' },
    { q: 'How do I search for properties?', a: 'You can search by property type, location, or specific needs. All listings include verified details, images, and pricing for easy comparison.' },
    { q: 'Can I buy, rent, or lease properties through HomeWorkx?', a: 'Yes. HomeWorkx supports buying, renting, and leasing across residential, commercial, industrial, and land properties.' },
    { q: 'Are all properties verified?', a: 'Yes. Each property undergoes thorough inspection and verification for accuracy, safety, and legal compliance.' },
    { q: 'How do I contact property owners or agents?', a: 'You can message owners or agents directly through the platform, ensuring secure and transparent communication.' },
    { q: 'Does HomeWorkx offer financial support for property transactions?', a: 'Yes. Our Easy Loans service provides structured loan options for property purchases, renovations, and investments.' },
    { q: 'Can I manage my rental payments through HomeWorkx?', a: 'Absolutely. Our Rent Management tools let landlords and tenants track payments, lease durations, and send automated reminders.' },
    { q: 'What additional services does HomeWorkx provide?', a: 'We offer interior design, property valuation, packers & movers, renovation, verification, documentation support, and property management.' },
    { q: 'Is HomeWorkx safe for first-time property buyers or tenants?', a: 'Yes. Verified listings, secure payment options, and compliance with Nigerian property laws help reduce risks.' },
    { q: 'Can I list my property on HomeWorkx?', a: 'Yes. HomeWorkx allows owners, agents, and developers to list verified properties with access to tracking, analytics, and tenant inquiries.' },
    { q: 'How can I pay for services on HomeWorkx?', a: 'Payments can be made via bank transfers, debit/credit cards, and other secure online options.' },
    { q: 'Does HomeWorkx provide property renovation or improvement services?', a: 'Yes. We connect owners to verified professionals for renovations, interior design, energy installations, and general property maintenance.' },
    { q: 'Can I track the performance of my property listing?', a: 'Yes. HomeWorkx provides analytics on views, inquiries, and engagement to help owners and agents optimize listings.' },
    { q: 'Can people abroad use HomeWorkx?', a: 'Absolutely. As long as you are looking to buy, rent, or lease starting in Lagos, Nigeria, you can browse listings, chat with owners or agents, and arrange transactions remotely.' },
    { q: 'How do I get support if I have questions or issues?', a: 'Our customer support team is available via email, phone, and social media to help with inquiries, disputes, and guidance on property processes.' }
  ];
  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
