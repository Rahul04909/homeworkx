import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-easy-loans',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './easy-loans.html',
  styleUrl: './easy-loans.css',
})
export class EasyLoans {
  sendEmail(name: string, email: string, phone: string, amount: string, purpose: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent('Loan Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAmount: ${amount}\nPurpose: ${purpose}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
