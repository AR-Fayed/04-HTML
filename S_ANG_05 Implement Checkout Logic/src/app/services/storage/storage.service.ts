import { Injectable } from '@angular/core';
import { CartLines } from 'src/app/interfaces/cart-lines';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  itemsInStorage() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  save(cartLines: CartLines[]) {
    const products = cartLines.map((cartLine: CartLines) => {
      return {
        product: cartLine.product,
        quantity: cartLine.quantity,
        price: cartLine.price,
      };
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  addProducts(product: Product, quantity: number) {
    const cart = this.itemsInStorage();
    const idx = cart.findIndex((i: any) => i.product._id == product._id);
    if (idx >= 0) {
      cart[idx].quantity += 1;
    } else cart.push({ product, quantity });
    localStorage.setItem('products', JSON.stringify(cart));
  }

  getCartLines(): CartLines[] {
    const cartLines: CartLines[] = [];
    const storage = this.itemsInStorage();
    storage.forEach((item: any) => {
      const currentCart: CartLines = {
        product: item.product,
        quantity: item.quantity,
        price: item.product.price,
      };
      cartLines.push(currentCart);
    });
    return cartLines;
  }

  getQuantity(): number {
    const products = this.itemsInStorage();
    return this.addProducts.length || 0;
  }
}
