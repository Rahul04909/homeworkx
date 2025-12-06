import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-property-valuation',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './property-valuation.html',
  styleUrl: './property-valuation.css',
})
export class PropertyValuation {
  sendEmail(name: string, email: string, phone: string, propertyType: string, location: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Property Valuation Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProperty Type: ${propertyType}\nLocation: ${location}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
