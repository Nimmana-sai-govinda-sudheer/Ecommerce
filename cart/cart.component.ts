import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  sudheer:any;
  // constructor(private bs:ProductService){}
  constructor(private bs:ProductService,private route:Router){}


 




  deleteItem(productonj:any)
  {
    this.bs.deletecart(productonj);
  }


  bynow()
  {
     this.route.navigateByUrl("/payment");
  }




  ngOnInit()
  {
    this.bs.cartAll().subscribe((res)=>
    {
      
      console.table(res);
      this.sudheer=res;
    
    })
  }
}


