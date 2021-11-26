import { Component, OnInit } from '@angular/core';
import {ProductService} from "../User/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((liste)=>{
      this.products=liste;
    });
  }

}
