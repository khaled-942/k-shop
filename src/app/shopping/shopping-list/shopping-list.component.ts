import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  products!: Product[]
  total: number = 0

  constructor(private cart: CartService) { }
  ngOnInit(): void {
    this.cart.cartItemsobs.subscribe((data) => {
      this.products = data;
    })
    this.cart.totalPriceobs.subscribe(data=>{this.total = data});
  }

  clearAll() {
    this.cart.removeAll()
  }


}
