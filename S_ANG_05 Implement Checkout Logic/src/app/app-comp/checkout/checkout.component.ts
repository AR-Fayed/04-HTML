import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartLines } from 'src/app/interfaces/cart-lines';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private storageService:StorageService,private authService:AuthService, private router:Router){
    this.cartLines = this.storageService.getCartLines()
  }

  @Input() cartLines:CartLines[] = []

  error:string=''
  
  

  checkoutForm = new FormGroup(
    {
      first_name: new FormControl('',[Validators.required]),
      last_name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobile: new FormControl('',[Validators.required]),
      address_1: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      zone: new FormControl('',[Validators.required]),
      zip_code: new FormControl('',[Validators.required])
    }
  )


placeOrder(){
  if(this.checkoutForm.valid){
    const token = this.authService.getToken()
    const data = {
      "sub_total_price": this.getSubTotal(),
      "shipping": this.getShipping(),
      "total_price": this.getTotal(),
      "user_id": this.authService.getId(),
      "order_date": "2022-01-01",
      "order_details": this.cartLines.map((cartLine:any)=> {
        return {
          product_id : cartLine.product._id,
          price : cartLine.product.price,
          qty: cartLine.quantity,
        };
      }),
      "shipping_info": this.checkoutForm.value
  };
    this.authService.placeOrder(data,token).subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['/thank-you'])
    },(error: any) => {
      console.log(error.error)
      this.error=error?.error
    })
  }
}
  
getSubTotal = (): number => {
  return this.cartLines
    .map((c) => c.quantity * c.price)
    .reduce((acc, v) => (acc = acc + v), 0);
};

getShipping = (): number => {
  return this.cartLines.map((c) => c.quantity)
  .reduce((acc, v) => (acc = acc + v), 0) * 10
};

getTotal = (): number => {
  return this.getSubTotal()+this.getShipping()
};


}