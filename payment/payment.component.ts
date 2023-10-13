import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private bs:Router){}



  sucess()
  {
     this.bs.navigateByUrl("/success");
  }



  back()
  {
     this.bs.navigateByUrl("/product");
  }

  
}
