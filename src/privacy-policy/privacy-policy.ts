import { Component } from '@angular/core';
import { Header } from '../app/components/header/header';
import { Footer } from '../app/components/footer/footer';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicy {

}
