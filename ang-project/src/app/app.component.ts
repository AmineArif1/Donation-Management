import { Component } from '@angular/core';

declare const mytest:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-project';
  onclic(){
    mytest();
  }
}
 
  
 

