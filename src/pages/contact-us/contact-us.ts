import { Component } from '@angular/core';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  sendEmail(name: string, email: string, phone: string, subject: string, message: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent(subject || 'Support Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
