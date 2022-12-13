import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-comp/layouts/header/header.component';
import { HomeComponent } from './app-comp/home/home.component';
import { FooterComponent } from './app-comp/layouts/footer/footer.component';
import { ShopComponent } from './app-comp/shop/shop.component';
import { DetailComponent } from './app-comp/detail/detail.component';
import { CartComponent } from './app-comp/cart/cart.component';
import { CheckoutComponent } from './app-comp/checkout/checkout.component';
import { ContactComponent } from './app-comp/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
