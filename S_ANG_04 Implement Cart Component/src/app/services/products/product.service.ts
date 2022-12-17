import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/classes/product/product';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  heartProducts: Product[] = [];
  cartProducts: Product[] = [];

  constructor(private httpclient:HttpClient) { }


  getProducts():any {
    return this.httpclient.get(`${environment.apiUrl}products`)
  }
  
  getFeaturedProducts():any {
    return this.httpclient.get(`${environment.apiUrl}products/getFeatured`)
  }

  getRecentProducts():any {
    return this.httpclient.get(`${environment.apiUrl}products/getRecent`)
  }

  addProduct(product:Product): void {
    this.cartProducts.push(product);
  }

  addHeart(product:Product): void {
    this.heartProducts.push(product)
  }

  getElementById(id:string) {
    return this.httpclient.get(`${environment.apiUrl}products/${id}`)
  }

  getElementByCategoryId(id:string) {
    return this.httpclient.get(`${environment.apiUrl}products/getByCategoryId/${id}`)
  }
}
