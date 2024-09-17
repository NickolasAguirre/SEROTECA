import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponentComponent } from './layout/layout-component/layout-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SEROTECA-WEB-FRONT';
}
