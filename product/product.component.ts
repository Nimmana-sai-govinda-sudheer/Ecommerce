import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
// import { CartComponent } from '../cart/cart.component';
import { Route, Router } from '@angular/router';
import { product } from '../service/product';
import { CartComponent } from '../cart/cart.component';
// import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  sudheer:any;
  constructor(private bs:ProductService,private route:Router){}



  deleteItem(productonj:any)
  {
    this.bs.deleteProduct(productonj);
  }

  viewcart()
  {
       this.route.navigateByUrl('/cart')


  }





  // cart(productonj:any)
  // {
  //   this.bs.addcart(productonj)
  // }

  cart(p:any)
  {
      this.bs.addcart(p);
  }


  editcon(p:any)
  {
    p.pedit=true;
  }

  updatecon(p:any){

    p.pedit=false;

  }













  ngOnInit()
  {
    this.bs.getAll().subscribe((res)=>
    {
      console.log("sjd")
      console.table(res);
      
      this.sudheer=res;
    
    })
  }
}

