import { Product } from '../product/product';

export class CartLines {
  product: Product;
  quantity: number;
  price: number;

  constructor(product: Product, quantity: number, price: number){
    this.product = product
    this.quantity = quantity
    this.price = price
  };
}
