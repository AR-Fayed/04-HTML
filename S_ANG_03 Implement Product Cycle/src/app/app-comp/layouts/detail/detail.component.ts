import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/products/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environment/environment';
declare var $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements AfterViewInit {
  id: string = '';
  product: Product = {} as Product;
  products: Product[] = [];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private storageService: StorageService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.productService.getElementById(this.id).subscribe((data: any) => {
      this.product = data.data;
    });
    this.productService
      .getElementByCategoryId(this.product.category_id)
      .subscribe((data: any) => {
        this.product = data.data;
      });
  }

  decQuantity = () => {
    if (this.quantity <= 1) return (this.quantity = 1);
    else return (this.quantity -= 1);
  };

  incQuantity = () => {
    this.quantity += 1;
  };

  addToCartWithQuantity = () => {
    this.storageService.addProducts(this.product,this.quantity);
  };

  ngAfterViewInit(): void {
    $('.related-carousel').owlCarousel({
      loop: true,
      margin: 29,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }
}
