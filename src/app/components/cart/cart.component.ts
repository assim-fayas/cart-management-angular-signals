import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  cartService$:CartService=inject(CartService)
  cartEmpty:boolean=true
  
  
  removeItem(id:number){
  this.cartService$.removeProduct(id)
  }
  

}
