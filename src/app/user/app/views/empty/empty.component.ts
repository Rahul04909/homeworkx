import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [CommonModule],
  template: '<p>This is an empty page.</p>',
  styles: []
})
export class EmptyComponent { }
