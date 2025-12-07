import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent {
  oldPassword!: string;
  newPassword!: string;
  confirmNewPassword!: string;

  constructor() { }

  ngOnInit(): void {
  }

  updatePassword(): void {
    if (this.newPassword !== this.confirmNewPassword) {
      alert('New password and confirm new password do not match.');
      return;
    }
    // Here you would typically call a service to update the password
    console.log('Updating password...', { oldPassword: this.oldPassword, newPassword: this.newPassword });
    alert('Password updated successfully (simulated).');
    // Reset form or navigate away
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}
