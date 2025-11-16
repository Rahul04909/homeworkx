import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './boss/app/icons/icon-subset';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homeworkx');
  readonly #iconSetService = inject(IconSetService);
  constructor() {
    this.#iconSetService.icons = { ...iconSubset };
  }
}
