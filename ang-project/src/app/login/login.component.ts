import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signupVolnt : any[]=[];
  signupObject: any={
    UserName:'',
    email:'',
    password:''
  };
  LoginObject: any={
    UserName:'',
    password:''
  };
  constructor(){

  }
  ngOnInit(): void{
    const localData=localStorage.getItem('signuoVolnt');
    if(localData!=null){
      this.signupVolnt=JSON.parse(localData);
    }

  }
  onSignUp(){
    this.signupVolnt.push(this.signupObject);
    localStorage.setItem('signuoVolnt',JSON.stringify(this.signupVolnt));
    this.signupObject={
      UserName:'',
      email:'',
      password:''
    };

  }
  onLogin(){
    
    const isVontExist= this.signupVolnt.find(m => m.UserName== this.LoginObject.UserName && m.password == this.LoginObject.password);
    if(isVontExist!=undefined){
      alert('volenteer login successfully')
    }else{
      alert('erooor')
    }
    
  }

 

  

}
