import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ShareProductDetailsService } from 'src/app/shared/services/share-product-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  constructor(config: NgbRatingConfig, private productDetails:ShareProductDetailsService, private route : Router) {
    config.max = 5;
		config.readonly = true;
  }
  @Input() passProduct!: Product;
  addToCart(){
    console.log('1')
  }
  productDetail(){
    // this.productDetails.productDetails.emit(this.passProduct);
    this.productDetails.productDetails.next(this.passProduct);
    this.route.navigate([`/Products/item/${this.passProduct.id}`])
  }
}
