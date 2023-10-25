import { Injectable } from '@angular/core';
import { Product } from '../interfaces/productInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = new BehaviorSubject<Product[]>([]);
  cartItemsobs = this.cartItems.asObservable();

  totalPrice = new BehaviorSubject<number>(0);
  totalPriceobs = this.totalPrice.asObservable();

  orderPlaced = new BehaviorSubject<boolean>(false);
  orderPlacedObs = this.orderPlaced.asObservable();

  arr: Product[] = [];
  checkItemInCart!: number;
  constructor() {}

  addProductToCart(productAdded: Product) {
    this.checkItemInCart = this.arr.findIndex(
      (item: Product) => item.id == productAdded.id
    );
    if (this.arr.length === 0) {
      this.arr.push(productAdded);
    } else {
      if (this.checkItemInCart === -1) {
        this.arr.push(productAdded);
      }
    }
    this.cartItems.next(this.arr);
    this.getTotalAmount();
  }

  calcTotal(data: Product) {
    data.totalQMP = (1 - data.discount) * data.quantity * data.price;
    return data.totalQMP;
  }

  more(id: number) {
    this.arr.map((data) => {
      if (data.id === id) {
        data.quantity += 1;
        this.calcTotal(data);
      }
    });
    this.getTotalAmount();
  }

  less(id: number) {
    this.arr.map((data) => {
      if (data.id === id) {
        data.quantity -= 1;
        this.calcTotal(data);
      }
    });
    this.getTotalAmount();
  }

  removeSpecificItem(cartItem: Product) {
    this.arr.map((pro: Product, index: number) => {
      if (cartItem.id === pro.id) {
        this.arr.splice(index, 1);
        this.cartItems.next(this.arr);
        this.getTotalAmount();
      }
    });
  }

  removeAll() {
    this.arr = [];
    this.cartItems.next(this.arr);
  }

  getTotalAmount() {
    let total = 0;
    this.arr.map((product: Product) => {
      this.calcTotal(product);
      total += product.totalQMP;
    });
    this.totalPrice.next(total);
  }
}
