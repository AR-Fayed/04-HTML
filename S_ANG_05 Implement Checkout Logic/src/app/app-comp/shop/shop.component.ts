import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  filter: any = {
    price: [{min:0,max:0}],
    size: [''],
    colors: [''],
  };

  pageNumber: number = 0;
  itemsPerPage: number = 6;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.data;
    });
  }

  changePage(i:number){
    this.pageNumber = i
  }

  filterChange(filter: any) {
    this.filter = filter;
  }

  getFilteredProducts():Product[]{
    return this.products.filter(
      (p) => this.filterColors(p) && this.filterPrice(p) && this.filterSize(p)
    )
  }

  getProducts(): Product[] {
    return this.getFilteredProducts().slice((this.pageNumber*this.itemsPerPage),(this.pageNumber*this.itemsPerPage+this.itemsPerPage))
  }

  getTotalCount(){
    return this.getFilteredProducts().length
  }

  filterPrice(p: Product) {
    return (
       this.filter.price.findIndex(
         (x: any) =>
           (x.min <= p.price && x.max >= p.price) || (x.min == 0 && x.max == 0)
       ) >= 0
    );
  }

  filterColors(p: Product) {
    if (this.filter.colors.includes('')) {return true};
    return this.filter.colors.includes(p.color);
  }

  filterSize(p: Product) {
     if (this.filter.size.includes('')) {return true};
     return this.filter.size.includes(p.size);
  
  }
}
