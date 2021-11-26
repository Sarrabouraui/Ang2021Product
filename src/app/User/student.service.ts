import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(){
   // return this.http.get("./assets/product.json");
    return this.http.get("http://localhost:3000/product");
  }
  addProduct(data){
    return this.http.post("http://localhost:3000/product",data);
  }
}
