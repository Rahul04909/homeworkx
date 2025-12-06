import { Component } from '@angular/core';
import { Header } from '../app/components/header/header';
import { Footer } from '../app/components/footer/footer';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
