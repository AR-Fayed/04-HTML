import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ColorService } from 'src/app/services/color/color.service';
import { SizeService } from 'src/app/services/size/size.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnInit {
  sizes: string[] = [];
  colors: string[] = [];
  
  @Output() filterChange = new EventEmitter<any>();

  filter: any = {
    price: [{ min: 0, max: 0 }],
    sizes: [''],
    colors: [''],
  };

  constructor(
    private colorService: ColorService,
    private sizeService: SizeService
  ) {}

  changePrice(event: any, min: number, max: number) {
    if (event.target.checked) {
      this.filter.price.push({ min: min, max: max });
    } else {
      const ix = this.filter.price.findIndex(
        (x: any) => x.min == min && x.max == max
      );
      this.filter.prices.splice(ix, 1);
    }
    this.filterChange.emit(this.filter);
  }

  changeColor(event: any, c: string) {
    if (event.target.checked) {
      this.filter.colors.push(c);
    } else {
      const ix = this.filter.colors.findIndex((x: any) => x == c);
      this.filter.colors.splice(ix, 1);
    }
    this.filterChange.emit(this.filter);
  }

  changeSize(event: any, s: string) {
    if (event.target.checked) {
      this.filter.sizes.push(s);
    } else {
      const ix = this.filter.sizes.findIndex((x: any) => x == s);
      this.filter.sizes.splice(ix, 1);
    }
    this.filterChange.emit(this.filter);
  }

  ngOnInit(): void {
    this.colors = this.colorService.getColors();
    this.sizes = this.sizeService.getSizes();
  }
}
