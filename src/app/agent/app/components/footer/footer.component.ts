import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [DatePipe]
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
