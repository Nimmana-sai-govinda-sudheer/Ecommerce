import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:any;
  username: any;


  constructor(private bs:Router){}







  ngOnInit()
  {
   
    if(localStorage.getItem("loggedinuser")==null)
    {
   
    
      console.log("uehdhu")
      this.bs.navigateByUrl('/');
    }
    else{
      this.user=localStorage.getItem("loggedinuser");
  
      this.user=JSON.parse(this.user);
  
      this.username=this.user.uname;
    }
  }

   logout()
    {
      localStorage.removeItem('loggedinuser');
      this.bs.navigateByUrl('/');

    }
}
  




