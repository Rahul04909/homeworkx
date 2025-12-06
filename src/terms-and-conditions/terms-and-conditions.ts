import { Component } from '@angular/core';
import { Header } from '../app/components/header/header';
import { Footer } from '../app/components/footer/footer';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './terms-and-conditions.html',
  styleUrl: './terms-and-conditions.css',
})
export class TermsAndConditions {

}
