import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ShareProductDetailsService } from 'src/app/shared/services/share-product-details.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor(config: NgbRatingConfig, private productDetails:ShareProductDetailsService, private route : Router, private cart: CartService) {
    config.max = 5;
		config.readonly = true;
  }
  @Input() passProduct!: Product;
  ngOnInit(): void {
    this.passProduct.priceAD = Math.ceil(this.passProduct.price * (1 - this.passProduct.discount)) 
  }
  addToCart(){
    this.cart.addProductToCart(this.passProduct);
  }
  productDetail(){
    this.productDetails.productDetails.next(this.passProduct);
    this.route.navigate([`/Products/item/${this.passProduct.id}`])
  }
}
