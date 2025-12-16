import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../services/user-auth.service';

@Component({
  selector: 'app-forgot-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, FormsModule, CommonModule]
})
export class ForgotResetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer?: ElementRef<HTMLDivElement>;
  showPassword = false;
  showConfirm = false;
  private animation?: any;

  password = '';
  confirmPassword = '';
  loading = false;

  email = '';
  otp = '';

  constructor(private authService: UserAuthService, private router: Router) {
    const state = this.authService.getResetState();
    if (!state || !state.email || !state.otp) {
      this.router.navigate(['/user/forgot-password']);
    } else {
      this.email = state.email;
      this.otp = state.otp;
    }
  }

  submit() {
    if (!this.password || !this.confirmPassword) {
      alert('Please enter password');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.loading = true;
    const payload = {
      email: this.email,
      otp: this.otp,
      new_password: this.password,
      new_password_confirmation: this.confirmPassword
    };

    this.authService.resetPassword(payload).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.authService.clearResetState();
          this.router.navigate(['/user/forgot-password/success']);
        } else {
          alert(res.message || 'Reset failed');
        }
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        alert(err.error?.message || 'Error occurred');
      }
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  async ngAfterViewInit() {
    if (!this.lottieContainer) return;
    const lottie = (window as any).lottie;
    if (!lottie) return;
    this.animation = lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/lottie/forget-password.json'
    });
  }

  ngOnDestroy() {
    if (this.animation && typeof this.animation.destroy === 'function') {
      this.animation.destroy();
    }
  }
}