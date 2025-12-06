import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-property-finder',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './property-finder.html',
  styleUrl: './property-finder.css',
})
export class PropertyFinder {
  sendEmail(name: string, email: string, phone: string, type: string, city: string, status: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Property Finder Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${type}\nCity: ${city}\nStatus: ${status}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
