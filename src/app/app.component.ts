import { Component } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'safe-driver';
}
