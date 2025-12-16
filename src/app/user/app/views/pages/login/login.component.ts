import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, FormsModule, CommonModule]
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer?: ElementRef<HTMLDivElement>;
  showPassword = false;
  private animation?: any;

  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: UserAuthService, private router: Router) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.errorMessage = '';
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password.';
      return;
    }

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          console.log('Login successful');
          this.router.navigate(['/user/dashboard']); // Redirect to dashboard
        } else {
          this.errorMessage = response.message || 'Login failed';
        }
      },
      error: (err) => {
        console.error('Login error', err);
        this.errorMessage = err.error?.message || 'Invalid email or password';
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
      path: '/assets/lottie/user-login.json'
    });
  }

  ngOnDestroy() {
    if (this.animation && typeof this.animation.destroy === 'function') {
      this.animation.destroy();
    }
  }
}
