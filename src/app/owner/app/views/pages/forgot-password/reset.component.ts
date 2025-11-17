import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent, ColComponent, ContainerComponent, FormControlDirective, FormDirective, InputGroupComponent, InputGroupTextDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-forgot-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective]
})
export class ForgotResetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer?: ElementRef<HTMLDivElement>;
  showPassword = false;
  showConfirm = false;
  private animation?: any;
  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm() { this.showConfirm = !this.showConfirm; }
  async ngAfterViewInit() { if (!this.lottieContainer) return; const lottie = (window as any).lottie; if (!lottie) return; this.animation = lottie.loadAnimation({ container: this.lottieContainer.nativeElement, renderer: 'svg', loop: true, autoplay: true, path: '/assets/lottie/forget-password.json' }); }
  ngOnDestroy() { if (this.animation && typeof this.animation.destroy === 'function') { this.animation.destroy(); } }
}