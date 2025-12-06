import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './verification.html',
  styleUrl: './verification.css',
})
export class Verification {
  sendEmail(name: string, email: string, phone: string, address: string, docs: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Property Verification Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nDocuments: ${docs}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
