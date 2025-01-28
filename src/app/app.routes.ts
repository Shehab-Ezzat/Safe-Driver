import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'auth', loadComponent:()=>import('./auth/auth.component').then(c=>c.AuthComponent)},
    {path:"",redirectTo:'auth',pathMatch:'full'},
    {path:'register', loadComponent:()=>import('./register-page/register-page.component').then(c=>c.RegisterPageComponent)},
];
