import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-comp/home/home.component';
import { ShopComponent } from './app-comp/shop/shop.component';
import { DetailComponent } from './app-comp/detail/detail.component';
import { CartComponent } from './app-comp/cart/cart.component'; 
import { CheckoutComponent } from './app-comp/checkout/checkout.component';
import { ContactComponent } from './app-comp/contact/contact.component';
import { AuthGuard } from './services/guard/auth.guard';
import { LoginComponent } from './app-comp/login/login.component';
import { RegisterComponent } from './app-comp/register/register.component';
import { ThankYouComponent } from './app-comp/thank-you/thank-you.component';

const routes: Routes = [{path:'home', component: HomeComponent},
{path:'shop', component: ShopComponent},
{path:'detail/:id', component: DetailComponent},
{path:'cart', component: CartComponent},
{path:'checkout', component: CheckoutComponent, canActivate:[AuthGuard]},
{path:'contact', component: ContactComponent},
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'thank-you',component: ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
