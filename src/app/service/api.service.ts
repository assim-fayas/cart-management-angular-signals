import { Injectable, inject } from '@angular/core';
import{toObservable, toSignal} from '@angular/core/rxjs-interop';
import{HttpClient}from '@angular/common/http'
import { environment } from '../environments/environment';
import { Product } from '../components/model/product';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  http:HttpClient=inject(HttpClient)
  private api=environment.api

listProducts= toSignal<Product[]>(this.http.get<Product[]>(`${this.api}/products`)) 
public products$ = toObservable(this.listProducts);
}



