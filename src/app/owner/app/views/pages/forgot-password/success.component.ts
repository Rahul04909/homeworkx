import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent, ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-forgot-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, ButtonDirective]
})
export class ForgotSuccessComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer?: ElementRef<HTMLDivElement>;
  private animation?: any;
  async ngAfterViewInit() { if (!this.lottieContainer) return; const lottie = (window as any).lottie; if (!lottie) return; this.animation = lottie.loadAnimation({ container: this.lottieContainer.nativeElement, renderer: 'svg', loop: true, autoplay: true, path: '/assets/lottie/forget-password.json' }); }
  ngOnDestroy() { if (this.animation && typeof this.animation.destroy === 'function') { this.animation.destroy(); } }
}