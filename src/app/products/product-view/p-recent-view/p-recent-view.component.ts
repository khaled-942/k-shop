import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavService } from 'src/app/shared/services/fav.service';
import { ShareProductDetailsService } from 'src/app/shared/services/share-product-details.service';

@Component({
  selector: 'app-p-recent-view',
  templateUrl: './p-recent-view.component.html',
  styleUrls: ['./p-recent-view.component.scss'],
})
export class PRecentViewComponent implements OnInit {
  constructor(private shoppingcart: CartService, private fav: FavService,
    private productDetails: ShareProductDetailsService, private route: Router) { }
  @Input() otherproducts!: Product;
  ngOnInit(): void {
    this.otherproducts.priceAD = this.otherproducts.price * (1 - this.otherproducts.discount);
  }
  addtocart() {
    this.shoppingcart.addProductToCart(this.otherproducts);
  }
  addtoFav() {
    this.fav.addProductToFav(this.otherproducts);
    this.otherproducts.fav = !this.otherproducts.fav
  }
  productDetail() {
    this.productDetails.productDetails.next(this.otherproducts);
    this.route.navigate([`/Products/item/${this.otherproducts.id}`])
  }
}
