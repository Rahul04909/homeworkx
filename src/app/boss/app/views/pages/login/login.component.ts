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
  RowComponent,
  SpinnerComponent
} from '@coreui/angular';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    RouterModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    FormsModule,
    CommonModule,
    SpinnerComponent
  ]
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer?: ElementRef<HTMLDivElement>;
  showPassword = false;
  private animation?: any;

  credentials = {
    email: '',
    password: ''
  };
  isLoading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (!this.credentials.email || !this.credentials.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    console.log('Attempting login with:', this.credentials.email);
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login response:', response);
        this.isLoading = false;
        if (response.status === 'success') {
          console.log('Login success, navigating to dashboard');
          this.router.navigate(['/admin/dashboard']);
        } else {
          console.warn('Login failed with status:', response.status);
          this.errorMessage = response.message || 'Login failed';
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'An error occurred during login';
      }
    });
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  loginWithGoogle() { }
  loginWithFacebook() { }

  async ngAfterViewInit() {
    if (!this.lottieContainer) return;
    const lottie = (window as any).lottie;
    if (!lottie) return;
    this.animation = lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/lottie/admin-login.json'
    });
  }

  ngOnDestroy() {
    if (this.animation && typeof this.animation.destroy === 'function') {
      this.animation.destroy();
    }
  }
}
