import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceLead {
  id: number;
  requestNumber: string;
  dateTime: string;
}

@Component({
  selector: 'app-service-leads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-leads.component.html',
  styleUrls: ['./service-leads.component.scss']
})
export class ServiceLeadsComponent implements OnInit {
  serviceLeads: ServiceLead[] = [];

  ngOnInit(): void {
    this.serviceLeads = [
      { id: 1, requestNumber: 'REQ001', dateTime: '2025-12-07 10:00 AM' },
      { id: 2, requestNumber: 'REQ002', dateTime: '2025-12-07 11:30 AM' },
      { id: 3, requestNumber: 'REQ003', dateTime: '2025-12-07 01:00 PM' },
    ];
  }

  viewLead(lead: ServiceLead): void {
    alert(`View details for Request Number: ${lead.requestNumber}`);
  }

  deleteLead(lead: ServiceLead): void {
    if (confirm(`Are you sure you want to delete Request Number: ${lead.requestNumber}?`)) {
      this.serviceLeads = this.serviceLeads.filter(l => l.id !== lead.id);
      alert(`Request Number: ${lead.requestNumber} deleted.`);
    }
  }
}
