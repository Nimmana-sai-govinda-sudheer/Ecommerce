import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username="";
  password=""
  user!: { uname: string; pwd: string; };


  constructor(private bs:Router){}
  login()
  {
    if(this.password=="12345")
    {
      this.user=
      {
        "uname":this.username,
        "pwd":this.password
      }
      this.bs.navigateByUrl('/product')
      localStorage.setItem('loggedinuser',JSON.stringify(this.user))
  
      
    }
    else
    {
      alert("wrong");
    }
  }














































    
  cancel()
  {
    this.username=""
    this.password=""
  }

  
  
 
}


