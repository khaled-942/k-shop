import { Injectable } from '@angular/core';
import { Product } from '../interfaces/productInterface';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  favItems = new BehaviorSubject<Product[]>([]);
  favItemsobs = this.favItems.asObservable();
  favarr: Product[] = [];
  checkItemInCart!: number;
  constructor(private api:ApiService) {
    this.api.getProducts().subscribe((data:any)=>{
      this.favItems.next(data.filter((item:any)=>item.fav === true))
    })
  }
  addProductToFav(productAdded: Product) {
    this.checkItemInCart = this.favarr.findIndex(
      (item: Product) => item.id == productAdded.id
    );
    if (this.favarr.length === 0) {
      this.favarr.push(productAdded);
    } else {
      if (this.checkItemInCart === -1) {
        this.favarr.push(productAdded);
      }
      else{
        this.favarr.splice(this.checkItemInCart,1)
      }
    }
    this.favItems.next(this.favarr);
  }
  
}
