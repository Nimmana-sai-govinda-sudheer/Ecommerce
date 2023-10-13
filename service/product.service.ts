import { Injectable } from '@angular/core';
import { product } from './product';
import {of} from 'rxjs'
import { cart } from './cart';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

products:product[]=[
{
  productId:"1",
  productName:"asus",
  productPrice:"75000",
  productFeatures:"16Gb",
  productImg:"https://m.media-amazon.com/images/I/71JNKFTBSwL._AC_UY327_FMwebp_QL65_.jpg",
  pedit:false
},
{
  productId:"2",
  productName:"HP",
  productPrice:"35000",
  productFeatures:"20Gb",
  productImg:"https://m.media-amazon.com/images/I/71JNKFTBSwL._AC_UY327_FMwebp_QL65_.jpg",
  pedit:false
},
{
  productId:"3",
  productName:"dell",
  productPrice:"65000",
  productFeatures:"30Gb",
  productImg:"https://m.media-amazon.com/images/I/71JNKFTBSwL._AC_UY327_FMwebp_QL65_.jpg",
  pedit:false
},
{
  productId:"4",
  productName:"lenovo",
  productPrice:"5500",
  productFeatures:"40Gb",
  productImg:"https://m.media-amazon.com/images/I/71JNKFTBSwL._AC_UY327_FMwebp_QL65_.jpg",
  pedit:false
}

]

carts:cart[]=[
  {
    productId:"1",
    productName:"asus",
    productPrice:"2000",
    productFeatures:"16Gb",
    productImg:"https://m.media-amazon.com/images/I/71JNKFTBSwL._AC_UY327_FMwebp_QL65_.jpg",
   
  }
  
  ]


cartAll()
{
  return of(this.carts);
}









































deleteProduct(productonj:any)
{
  const ind=this.products.findIndex((obj)=>obj.productId==productonj.productId);
  this.products.splice(ind,1);
}


deletecart(productonj:any)
{
  const ind=this.carts.findIndex((obj)=>obj.productId==productonj.productId);
  this.carts.splice(ind,1);
}















addcart(productonj:any)
{
  this.carts.push(productonj)
}

getAll()
{
  return of(this.products);
}

addProduct(productonj:any)
{
  this.products.push(productonj);
}


updateproduct(prod:any)
{
  this.products.forEach((obj,ind)=>{
    if(obj.productId==prod.productId)
    {
      this.products.splice(ind,1,prod);
    }
  })
}

}
