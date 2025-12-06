import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-rent-management',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './rent-management.html',
  styleUrl: './rent-management.css',
})
export class RentManagement {
  sendEmail(name: string, email: string, phone: string, cycle: string, details: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Rent Management Setup');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPayment Cycle: ${cycle}\nDetails: ${details}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
