import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  constructor(private http:HttpClient) { 
    
  }

  login(loginData:ILogin){
   return this.http.post('https://safedriver-be.onrender.com/api/auth/login', loginData);
  }
}
