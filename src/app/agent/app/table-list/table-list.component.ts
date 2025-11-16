import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AgentTableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
