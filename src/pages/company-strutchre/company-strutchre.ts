import { Component } from '@angular/core';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';

@Component({
  selector: 'app-company-strutchre',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './company-strutchre.html',
  styleUrl: './company-strutchre.css',
})
export class CompanyStrutchre {

}
