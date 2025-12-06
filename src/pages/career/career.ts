import { Component } from '@angular/core';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  sendEmail(name: string, email: string, phone: string, role: string, strengths: string) {
    const to = 'homeworxinc001@gmail.com';
    const s = encodeURIComponent(role ? `Career Inquiry: ${role}` : 'Career Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRole/Interest: ${role}\n\nStrengths:\n${strengths}\n\nPlease find my resume attached or I will send it in a follow-up.`
    );
    const mailto = `mailto:${to}?subject=${s}&body=${body}`;
    window.location.href = mailto;
  }
}
