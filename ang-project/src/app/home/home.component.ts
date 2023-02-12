import { Component } from '@angular/core';
import { getEvents } from 'src/services/getEvents';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events: any = [];
  constructor(private eventService: getEvents) { }

  ngOnInit() {
    this.eventService.getEvents(localStorage.getItem('token')).subscribe(data => {
      this.events = data;
    });
  }
}
