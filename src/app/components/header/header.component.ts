import { Component, OnInit, inject } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  cartItem$:CartService=inject(CartService)
ngOnInit(){

}
  


}
