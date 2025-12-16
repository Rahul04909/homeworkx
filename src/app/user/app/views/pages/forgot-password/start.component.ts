import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../services/user-auth.service';
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

@Component({
  selector: 'app-forgot-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, FormsModule, CommonModule]
})
export class ForgotStartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer?: ElementRef<HTMLDivElement>;
  private animation?: any;

  email = '';
  loading = false; // Add loading state if needed

  constructor(private authService: UserAuthService, private router: Router) { }

  submit() {
    if (!this.email) {
      alert('Please enter your email');
      return;
    }

    this.loading = true;
    this.authService.forgotPassword(this.email).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          // Store email and OTP (returned by API) in service state
          this.authService.setResetState(this.email, res.otp);
          alert('OTP sent to your email (Simulated: ' + res.otp + ')');
          // Navigate to verify page
          this.router.navigate(['/user/forgot-password/verify']);
        } else {
          alert(res.message || 'Failed to send OTP');
        }
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        alert(err.error?.message || 'Error occurred');
      }
    });

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