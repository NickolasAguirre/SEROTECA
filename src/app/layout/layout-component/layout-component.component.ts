import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.css',
})
export class LayoutComponentComponent {
  outerItems = [1, 2, 3];
  innerItems = ['A', 'B', 'C'];
}
