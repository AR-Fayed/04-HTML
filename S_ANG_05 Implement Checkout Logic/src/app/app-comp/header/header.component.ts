import { Component } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ProductService } from 'src/app/services/products/product.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public storageService:StorageService, public authService:AuthService){}


signOut(){
  this.authService.signOut()
}

}