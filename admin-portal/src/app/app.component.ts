import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/**
 * The root component of the application.
 * This component serves as the entry point for the application.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-portal';
}
