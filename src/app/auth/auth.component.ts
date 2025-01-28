import { Component, inject } from '@angular/core';
import {  FormsModule, NgForm } from '@angular/forms';
import {   NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports:[FormsModule, NgIf,RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  private login = inject(AuthService);

  onSubmit(authForm: NgForm) {
    if (authForm.invalid) {
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.login.login(loginData).subscribe({
      next:(response) => {
        console.log('Login success:', response);
      },
      error:(error) => {
        console.error('Login failed:', error);
      }
    });
  }
}
