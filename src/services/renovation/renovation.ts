import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-renovation',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './renovation.html',
  styleUrl: './renovation.css',
})
export class Renovation {
  sendEmail(name: string, email: string, phone: string, workType: string, details: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Renovation Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWork Type: ${workType}\nDetails: ${details}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
