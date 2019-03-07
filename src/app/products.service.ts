import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Injectable()

export class ProductsService {
  private dbUrl = "https://efa-gardenapp-backend.herokuapp.com/api/product";
  
  constructor(
    private http: HttpClient) { }


getProducts() {
  return this.http.get(this.dbUrl)
}

}
