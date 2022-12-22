import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-comp/header/header.component';
import { HomeComponent } from './app-comp/home/home.component';
import { FooterComponent } from './app-comp/footer/footer.component';
import { ShopComponent } from './app-comp/shop/shop.component';
import { DetailComponent } from './app-comp/detail/detail.component';
import { CartComponent } from './app-comp/cart/cart.component';
import { CheckoutComponent } from './app-comp/checkout/checkout.component';
import { ContactComponent } from './app-comp/contact/contact.component';
import { CategoriesComponent } from './app-comp/home/categories/categories.component';
import { CategoryComponent } from './app-comp/home/categories/category/category.component';
import { StarsComponent } from './app-comp/home/products/product/stars/stars.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartTableComponent } from './app-comp/cart/cart-table/cart-table.component';
import { CartTotalComponent } from './app-comp/cart/cart-total/cart-total.component';
import { CartCouponComponent } from './app-comp/cart/cart-coupon/cart-coupon.component';
import { ProductsComponent } from './app-comp/home/products/products.component';
import { ProductComponent } from './app-comp/home/products/product/product.component';
import { ProductFilterComponent } from './app-comp/shop/product-filter/product-filter/product-filter.component';
import { ProductShopComponent } from './app-comp/shop/product-shop/product-shop/product-shop.component';
import { ProductPaginationComponent } from './app-comp/shop/product-pagination/product-pagination/product-pagination.component';
import { LoginComponent } from './app-comp/login/login.component';
import { RegisterComponent } from './app-comp/register/register.component';
import { ThankYouComponent } from './app-comp/thank-you/thank-you.component';

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
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    StarsComponent,
    CartTotalComponent,
    CartCouponComponent,
    ProductsComponent,
    ProductComponent,
    CartTableComponent,
    ProductFilterComponent,
    ProductShopComponent,
    ProductPaginationComponent,
    LoginComponent,
    RegisterComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
