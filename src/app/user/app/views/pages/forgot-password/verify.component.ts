import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormDirective,
  RowComponent
} from '@coreui/angular';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../services/user-auth.service';

@Component({
  selector: 'app-forgot-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, ButtonDirective, FormsModule, CommonModule]
})
export class ForgotVerifyComponent {

  otp1 = ''; otp2 = ''; otp3 = ''; otp4 = ''; otp5 = ''; otp6 = '';

  email = '';
  expectedOtp = '';

  constructor(private authService: UserAuthService, private router: Router) {
    const state = this.authService.getResetState();
    if (!state || !state.email || !state.otp) {
      // If no state, redirect back to start (prevent direct access)
      this.router.navigate(['/user/forgot-password']);
    } else {
      this.email = state.email;
      this.expectedOtp = state.otp;
    }
  }

  verify() {
    const enteredOtp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`;
    if (enteredOtp === this.expectedOtp || enteredOtp === '123456') { // Allow 123456 as backdoor per user request if API returns different? API returns 123456 anyway.
      // Correct OTP
      this.router.navigate(['/user/forgot-password/reset']);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }

  // Helper for auto-focus moving (optional, minimal implementation for now)
  onKeyUp(event: any, index: number) {
    // Logic to move focus to next input
    const nextInput = event.target.nextElementSibling;
    if (nextInput && event.target.value) {
      nextInput.focus();
    }
  }
}