import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-packers-and-movers',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './packers-and-movers.html',
  styleUrl: './packers-and-movers.css',
})
export class PackersAndMovers {
  sendEmail(name: string, email: string, phone: string, from: string, to: string) {
    const dest = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Moving Request');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFrom: ${from}\nTo: ${to}`
    );
    const mailto = `mailto:${dest}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
