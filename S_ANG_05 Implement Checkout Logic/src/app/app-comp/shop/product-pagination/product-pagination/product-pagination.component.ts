import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.css']
})
export class ProductPaginationComponent {

  @Input() totalCount:number = 0
  @Input() itemsPerPage:number = 0
  @Input() currentPage = 0
  @Output() currentPageChange = new EventEmitter<number>()

getPageCount():number{
  return Math.ceil(this.totalCount/this.itemsPerPage)
}

changePage(i:number){
  this.currentPage = i;
  this.currentPageChange.emit(i);
}

}
