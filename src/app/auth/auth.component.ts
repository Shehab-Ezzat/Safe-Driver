import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit(authForm: NgForm) {
    if (authForm.invalid) {
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('https://safedriver-be.onrender.com/api/auth/login', loginData)
      .subscribe(
        (response) => {
          console.log('Login success:', response);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
