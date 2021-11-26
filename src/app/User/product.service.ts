import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
   addProduct(data){
    return this.http.post("http://localhost:3000/product",data);
   }
   getProducts(){
    return this.http.get("http://localhost:3000/product");
   }
}
