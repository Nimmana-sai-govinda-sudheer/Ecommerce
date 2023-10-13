import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productId:any;
  productName:any;
  productPrice:any;
  productFeatures:any;
  productImg:any;
  productonj:any;
  // route: any;

  constructor(private service:ProductService,private route:Router){}

  adding()
  {
    this.productonj={
   productId:this.productId,
   productName:this.productName,
   productPrice:this.productPrice,
   productFeatures:this.productFeatures,
   productImg:this.productImg,
    }

    this.service.addProduct(this.productonj);
    this.route.navigateByUrl("/product")
  }
}
