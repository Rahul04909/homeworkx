import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, ButtonModule } from '@coreui/angular';

interface ServiceLead {
  id: number;
  requestNumber: string;
  dateTime: string;
  contactPersonMobileNo: string;
  contactPersonEmailId: string;
  subject: string;
  message: string;
  attachment?: string;
}

@Component({
  selector: 'app-service-leads',
  standalone: true,
  imports: [CommonModule, ModalModule, ButtonModule],
  templateUrl: './service-leads.component.html',
  styleUrls: ['./service-leads.component.scss']
})
export class ServiceLeadsComponent implements OnInit {
  serviceLeads: ServiceLead[] = [];
  viewModalVisible = false;
  selectedLead: ServiceLead | null = null;

  ngOnInit(): void {
    this.serviceLeads = [
      { id: 1, requestNumber: 'REQ001', dateTime: '2025-12-07 10:00 AM', contactPersonMobileNo: '123-456-7890', contactPersonEmailId: 'john.doe@example.com', subject: 'Inquiry about product A', message: 'I would like to know more about product A.', attachment: 'path/to/attachment1.pdf' },
      { id: 2, requestNumber: 'REQ002', dateTime: '2025-12-07 11:30 AM', contactPersonMobileNo: '098-765-4321', contactPersonEmailId: 'jane.smith@example.com', subject: 'Support request', message: 'My product is not working.', attachment: 'path/to/attachment2.docx' },
      { id: 3, requestNumber: 'REQ003', dateTime: '2025-12-07 01:00 PM', contactPersonMobileNo: '555-123-4567', contactPersonEmailId: 'peter.jones@example.com', subject: 'Feedback', message: 'Great service!' },
    ];
  }

  viewLead(lead: ServiceLead): void {
    this.selectedLead = lead;
    this.viewModalVisible = true;
  }

  handleViewModalChange(event: boolean) {
    this.viewModalVisible = event;
  }

  deleteLead(lead: ServiceLead): void {
    if (confirm(`Are you sure you want to delete Request Number: ${lead.requestNumber}?`)) {
      this.serviceLeads = this.serviceLeads.filter(l => l.id !== lead.id);
      alert(`Request Number: ${lead.requestNumber} deleted.`);
    }
  }
}
