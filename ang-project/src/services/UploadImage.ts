import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })

  export class  UploadImage{

    private apiUrl = 'http://127.0.0.1:8000/api';
    constructor(private http: HttpClient,private router: Router) { }
    uploadFile(event:any) {
        const file = event.target.files[0];
        this.uploadImage(file);
      }
    
      uploadImage(image: File) {
        const formData = new FormData();
        formData.append('imageEvent', image);
    
        this.http.post(this.apiUrl+'/api/upload-image', formData)
          .subscribe((response: any) => {
            console.log(response);
          });
      }
    ;}