import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { DeductionOfamountPipe } from './pipe/deduction-ofamount.pipe';
import { ShowElementsPipe } from './pipe/show-elements.pipe';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    LoaderComponent,
    ProductlistComponent,
    DeductionOfamountPipe,
      ShowElementsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
