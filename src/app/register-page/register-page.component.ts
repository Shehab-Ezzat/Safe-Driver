import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports:[FormsModule,NgIf,RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
    FullName: string = '';
    email: string = '';
    phoneNo: string = '';
    password: string = '';
    repeatedPassword:string= '';
  
    private register = inject(AuthService);

    passwordsMatch(): boolean  | undefined{
      if(this.password === this.repeatedPassword){
        return true;
      }
      else{
        return false;
      }
        }

    onSubmit(RegisteredForm: NgForm) {
      if (RegisteredForm.invalid) {
        return;
      }
      
      const registerData = {
        name:this.FullName,
        email: this.email,
        phone:this.phoneNo,
        password: this.password
      };
      
     

      this.register.register(registerData).subscribe(
        {next:(response)=>{
          response
        },
        error:(error) => {
          error
        }
      }
      )
    }

}
