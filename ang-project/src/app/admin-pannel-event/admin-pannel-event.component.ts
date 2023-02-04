import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl:'./admin-pannel-event.component.html',
  styles: []
})
export class AdminPannelEventComponent {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://127.0.0.1:8000';

  uploadFile(event:any) {
    const file = event.target.files[0];
    this.uploadImage(file);
  }

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);

    this.http.post(this.apiUrl+'/api/upload-image', formData)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}