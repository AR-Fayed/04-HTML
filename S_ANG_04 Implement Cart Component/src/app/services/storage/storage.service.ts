import { Injectable } from '@angular/core';
import { CartLines } from 'src/app/classes/cart-lines/cart-lines';
import { Product } from 'src/app/classes/product/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
    
constructor() {}

itemsInStorage(){
  return JSON.parse(localStorage.getItem("products") || "[]")
}

addProducts(product:Product , quantity:number){;
const cart = this.itemsInStorage()
const idx = cart.findIndex( (i:any) => i.product._id == product._id )
if(idx>=0) {cart[idx].quantity += 1}
else cart.push({product,quantity})
localStorage.setItem("products",JSON.stringify(cart))
}

getCartLines():CartLines[] {
 const cartLines:CartLines[]=[];
 const storage = this.itemsInStorage()  ;
 storage.forEach((item:any) => {
  const currentCart: CartLines = {
    product : item.product,
    quantity : item.quantity,
    price : item.product.price
  }
  cartLines.push(currentCart)
  
 });
 return cartLines
};

}