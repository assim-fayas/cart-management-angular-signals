import { Injectable, computed, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductList } from '../components/model/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiservice:ApiService=inject(ApiService)

public cartItem=signal<Product[]>([])
public totalItem=computed(()=>this.cartItem().length)
public subTotal=computed(()=>this.cartItem().reduce((prev:any,curr:Product)=>{
    return prev+curr.price
  },0)
)
  
addProduct(productt:Product){
  console.log(this.subTotal());
  this.cartItem.update((item)=>{
   
return [...item,productt]



  })

  this.apiservice.listProducts()?.forEach((item)=>{

if(item.id==productt.id){
  item.rating.count=item.rating.count-1
}
})

}




removeProduct(id:number){

  if(this.cartItem().length==1){
    this.cartItem.set([])
    }
  this.cartItem.update(item=>{
 
      const product=item.splice(id,1)
this.apiservice.listProducts()?.forEach(item=>{
  if(item?.id==product[0]?.id){
    item.rating.count+=1
  }
})



return item
  })
  
}






}
