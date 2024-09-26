import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponentComponent } from './layout/layout-component/layout-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponentComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SEROTECA-WEB-FRONT';
}
