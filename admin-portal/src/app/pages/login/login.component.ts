import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router service
import { ILogin } from '../../interfaces/login.';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected styleUrls
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { 

  OLogin: ILogin = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {} // Inject the Router service

  // function to be called when the user clicks the login button
  fnLogin() {
    console.log(this.OLogin);
    if (this.OLogin.username === 'admin' && this.OLogin.password === 'admin') {
      alert('Login successful');
      // redirect to dashboard
      this.router.navigate(['/backoffice/dashboard']); // Use the Router service to navigate
    } else {
      alert('Login failed');
    }
  }
}