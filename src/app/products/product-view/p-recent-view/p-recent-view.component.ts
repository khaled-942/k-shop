import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';
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
    private productDetails: ShareProductDetailsService, private route: Router,
    private api:ApiService) { }
  @Input() otherproducts!: Product;
  ngOnInit(): void {
    this.otherproducts.priceAD = Math.ceil(this.otherproducts.price * (1 - this.otherproducts.discount));
  }
  addtocart() {
    this.shoppingcart.addProductToCart(this.otherproducts);
  }
  addtoFav() {
    this.otherproducts.fav=! this.otherproducts.fav;
    this.api.updatefav(this.otherproducts, this.otherproducts.id).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error),
      ()=>console.log("done patching"),
    )
    this.fav.addProductToFav(this.otherproducts);
  }
  productDetail() {
    this.productDetails.productDetails.next(this.otherproducts);
    this.route.navigate([`/Products/item/${this.otherproducts.id}`])
  }
}
