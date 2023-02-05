import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendEvent } from 'src/services/SendEvent';

@Component({
  selector: 'app-root',
  templateUrl:'./admin-pannel-event.component.html',
  styles: []
})
export class AdminPannelEventComponent {
  nomEvent: string;
  descriptionEvent: string;
  dateEvent: string;
  lieuEvent: string;
  imageEvent: File;
  endPoint="admin"

  constructor(private send:SendEvent) {}
  
  uploadFile(event:any) {
    this.imageEvent = event.target.files[0];
    console.log(this.imageEvent)

  }
  sendEvent(){

    this.send.sendEvent(this.nomEvent,this.descriptionEvent,this.dateEvent,this.lieuEvent,this.imageEvent,localStorage.getItem('token'));
  }
    
}