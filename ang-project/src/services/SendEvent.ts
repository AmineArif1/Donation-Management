import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Event } from 'src/models/Event';
@Injectable({
  providedIn: 'root'
})
export class SendEvent {
  private apiUrl = 'http://127.0.0.1:8000/api';
  event:Event;

    constructor(private http: HttpClient,private router: Router) { }
  
    sendEvent(nomEvent: string, descriptionEvent: string, dateEvent: string, lieuEvent: string, imageEvent: File,token:string){
        const formData = new FormData();
        formData.append('nomEvent', nomEvent);
        formData.append('dateEvent', dateEvent);
        formData.append('lieuEvent', lieuEvent);
        formData.append('descriptionEvent', descriptionEvent);
        formData.append('imageEvent', imageEvent);
        this.http.post<any>(`${this.apiUrl}/events`, formData,{headers: new HttpHeaders({'Accept':'application/json','Authorization': `Bearer ${token}`})})
        .subscribe(response => {
            // Store the user object
            const event = new Event(response.nomEvent, response.descriptionEvent, response.dateEvent,response.lieuEvent,response.imageEvent);
            this.event = event;

          },
          error => {
            if (error.status === 401) {
              this.router.navigate(['/login']);
            }})
    }
}