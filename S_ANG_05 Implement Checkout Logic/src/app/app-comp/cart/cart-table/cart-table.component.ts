import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLines } from 'src/app/interfaces/cart-lines';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {
  @Input() cartLines: CartLines[] = [];
  @Output() limitAlert = new EventEmitter<string>();
  minusIsDisabled = false;
  plusIsDisabled = false;

  constructor(private storageService: StorageService) {}

  decQuantity = (i: number) => {
    if (this.cartLines[i].quantity > 1) {
      this.cartLines[i].quantity -= 1;
      this.storageService.save(this.cartLines);
    }
  };
  incQuantity = (i: number) => {
    this.cartLines[i].quantity += 1;
    this.storageService.save(this.cartLines);
  };
  remove = (i: number) => {
   this.cartLines.splice(i, 1);
   this.storageService.save(this.cartLines);
  };
}
