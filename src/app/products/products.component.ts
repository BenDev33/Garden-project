import { Component, OnInit } from '@angular/core';

// import { Products } from '../models/products.model'
import { ProductsService } from '../products.service';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  public products = {};

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
    .subscribe(products => {
      this.products = products
      console.log(products)
    });

  }

}
