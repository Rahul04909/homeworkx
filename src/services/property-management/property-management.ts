import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-property-management',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './property-management.html',
  styleUrl: './property-management.css',
})
export class PropertyManagement {
  sendEmail(name: string, email: string, phone: string, units: string, details: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Property Management Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nUnits: ${units}\nDetails: ${details}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
