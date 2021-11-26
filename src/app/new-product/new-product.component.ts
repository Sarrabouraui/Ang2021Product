import { Component, OnInit } from '@angular/core';
import {ProductService} from "../User/product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private  productservice: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(f){
    this.productservice.addProduct(f).subscribe(()=>{
      alert("Produit ajouté !");
    });
  }
}
