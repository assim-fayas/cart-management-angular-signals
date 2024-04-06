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
  // public cartaItems$=new BehaviorSubject<ProductList[]>([])
  // public subTotal$=new BehaviorSubject<number>(0)
  // public totalItems$=new BehaviorSubject<number>(0)
  // public CartProducts:ProductList[]=[]

// addProduct(product:ProductList){
//   console.log("insdie service sdd product");
  
//   this.CartProducts.push(product)
  
//   console.log("cart products ",this.CartProducts);
//   this.mapTotal()
// }
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

// removeProduct(id:number){
  
//   console.log(id);
  
//   if(this.CartProducts.length>1){
//     console.log("inside iff");
// console.log(  this.CartProducts );
  
//   this.CartProducts.splice(id,1) 
//   }
//   else if(this.CartProducts.length==1){
//     this.CartProducts=[]
//   }
//   this.mapTotal()

//   console.log("total item in the cart",this.CartProducts.length);
  
// }


removeProduct(id:number){
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


// private mapTotal(){
//   const total=this.CartProducts.reduce((acc:any,curr:any)=>{

    
    
//     return acc+=curr.price
//   },0)


//   this.subTotal$.next(total)
//   this.cartaItems$.next(this.CartProducts)
//   this.totalItems$.next(this.CartProducts.length)
// }



}
