import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-interior-desigen-and-home-upgrade',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './interior-desigen-and-home-upgrade.html',
  styleUrl: './interior-desigen-and-home-upgrade.css',
})
export class InteriorDesigenAndHomeUpgrade {
  sendEmail(name: string, email: string, phone: string, upgradeType: string, details: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Interior Design & Upgrades Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nUpgrade Type: ${upgradeType}\nDetails: ${details}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
