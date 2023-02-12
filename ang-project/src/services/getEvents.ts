import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class getEvents {
  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getEvents(token:string) {
    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      };
      
      return this.http.get(`${this.API_URL}/events`, httpOptions);
  }
}