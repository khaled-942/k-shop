import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  CartItems: string = '0';
  constructor(private cartCount: CartService) { }
  ngOnInit(): void {
    this.cartCount.cartItemsobs.subscribe((data) => {
      this.CartItems = data.length.toString();
    })
  }
}
