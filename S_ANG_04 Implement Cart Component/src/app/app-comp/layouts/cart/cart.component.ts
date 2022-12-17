import { Component } from '@angular/core';
import { CartLines } from 'src/app/classes/cart-lines/cart-lines';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  cartLines: CartLines[] = []

  constructor(private storageService:StorageService){
    this.cartLines = this.storageService.itemsInStorage()
  }



  getSubTotal = (): number => {
    return this.cartLines
      .map((c) => c.quantity * c.product.price)
      .reduce((acc, v) => (acc = acc + v), 0);
  };

  getShipping = (): number => {
    return this.cartLines.map((c) => c.quantity)
    .reduce((acc, v) => (acc = acc + v), 0) * 10
  };

  getTotal = (): number => {
    return this.getSubTotal()+this.getShipping()
  };

  sendAlert = (msg:String) => {
  return alert(msg)
  }
}
