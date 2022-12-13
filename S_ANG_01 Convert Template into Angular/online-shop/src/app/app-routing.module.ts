import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-comp/home/home.component';
import { ShopComponent } from './app-comp/shop/shop.component';
import { DetailComponent } from './app-comp/detail/detail.component';
import { CartComponent } from './app-comp/cart/cart.component'; 
import { CheckoutComponent } from './app-comp/checkout/checkout.component';
import { ContactComponent } from './app-comp/contact/contact.component';

const routes: Routes = [{path:'', component: HomeComponent},
{path:'shop', component: ShopComponent},
{path:'detail', component: DetailComponent},
{path:'cart', component: CartComponent},
{path:'checkout', component: CheckoutComponent},
{path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
