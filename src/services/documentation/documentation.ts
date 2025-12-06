import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './documentation.html',
  styleUrl: './documentation.css',
})
export class Documentation {
  sendEmail(name: string, email: string, phone: string, docsType: string, address: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Documentation Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${docsType}\nProperty Address: ${address}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
