import { StorageService } from "src/app/services/storage/storage.service";
import { CartLines } from "../cart-lines/cart-lines";

export class Cart {
    cartLines:CartLines[];

    constructor(cartLines:CartLines[],private storageService:StorageService){
        this.cartLines = cartLines
        this.storageService = new StorageService()
    }



}

