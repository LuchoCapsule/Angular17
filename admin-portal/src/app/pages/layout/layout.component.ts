import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
// Reference the RouterOutlet, RouterLinkActive, and RouterLink directives to use them in the html template
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  // Import the RouterOutlet, RouterLinkActive, and RouterLink directives to use them in the html template
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent { }
