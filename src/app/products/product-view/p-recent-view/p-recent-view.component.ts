import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-p-recent-view',
  templateUrl: './p-recent-view.component.html',
  styleUrls: ['./p-recent-view.component.scss'],
})
export class PRecentViewComponent implements OnInit {
  constructor(private shoppingcart: CartService){}
  @Input() otherproducts!: Product;
  ngOnInit(): void {
    this.otherproducts.priceAD = this.otherproducts.price * (1 - this.otherproducts.discount);
  }
  addtocart(){
    this.shoppingcart.addProductToCart(this.otherproducts);
  }
}
