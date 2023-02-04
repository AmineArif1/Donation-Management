import { Component } from '@angular/core';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password);
  }
}