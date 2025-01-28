import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILogin, IRegister } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(loginData:ILogin){
   return this.http.post('https://safedriver-be.onrender.com/api/auth/login', loginData);
  }

  register (registerData:IRegister){
    return this.http.post('https://safedriver-be.onrender.com/api/users/signup',registerData)
  }
}
