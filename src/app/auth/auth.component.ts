import { Component, inject } from '@angular/core';
import {  FormsModule, NgForm } from '@angular/forms';
import {   NgIf } from '@angular/common';
import { AuthLoginService } from '../services/auth-login.service';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports:[FormsModule,NgIf],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  private login = inject(AuthLoginService);

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
