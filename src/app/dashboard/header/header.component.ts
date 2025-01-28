import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  phoneNo ='01015286367';
  email = 'info@safedriver.dk';
  language = 'English';
  name = 'Shehab Ezzat';
}
