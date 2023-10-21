import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  CartItems: string = '0';
  constructor(private cartCount: CartService, private search: SearchService, private route:Router) {}
  ngOnInit(): void {
    this.cartCount.cartItemsobs.subscribe((data) => {
      this.CartItems = data.length.toString();
    });
  }
  setText(text:any) {
    this.search.searchText.next(text.target.value);
    this.route.navigate([`/Products/search/${text.target.value}`])
  }
}
