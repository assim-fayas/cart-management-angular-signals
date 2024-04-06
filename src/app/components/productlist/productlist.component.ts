import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Product, ProductList } from '../model/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  productApi$:ApiService=inject(ApiService)
  cart:CartService=inject(CartService)
  
  products:ProductList[]=[]
  viewmore:boolean=false
  loader:boolean=false
  addItem(item:Product){
 this.cart.addProduct(item)
                     }
  
  
      viewMore(){
        this.viewmore=!this.viewmore
      }
  
}
