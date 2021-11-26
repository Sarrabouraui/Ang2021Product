import { Component, OnInit } from '@angular/core';
import {ProductService} from "../User/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private serviceproduct: ProductService) { }

  ngOnInit(): void {
    this.serviceproduct.getProducts().subscribe(
      (result)=>{console.log(result);}
    );
  }

}
