import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  currentUser: User;

  constructor(private http: HttpClient,private router: Router) { }

  login(email: string, password: string): void {
    
    this.http.post<any>(`${this.apiUrl}/login`, { email, password },{headers: new HttpHeaders({'Content-Type':'application/json','Accept':'application/json'})})
      .subscribe(response => {
        // Store the user object
        console.log(response.token);
        const user = new User(response.user.name, response.user.email, response.token);
        this.currentUser = user;
        console.log(this.currentUser);
        localStorage.setItem('token', this.currentUser.token);
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/home']);

      },
      error => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }}) 
  }

  logout(): void {
    // Remove the current user object
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}