import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { CartService } from 'src/app/shared/services/cart.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  products!: Product[];
  total: number = 0;

  constructor(private cart: CartService, private loaderSer: LoaderService) {}
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false);
    this.cart.cartItemsobs.subscribe((data) => {
      this.products = data;
    });
    this.cart.totalPriceobs.subscribe((data) => {
      this.total = data;
    });
  }
  placeOrder() {
    this.cart.orderPlaced.next(true);
    this.products = [];
  }
  clearAll() {
    this.cart.removeAll();
  }
}
