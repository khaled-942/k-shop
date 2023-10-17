import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ShareProductDetailsService } from 'src/app/shared/services/share-product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  constructor(private details: ShareProductDetailsService) {}
  ngOnInit(): void {
    this.details.productDetailsObserv.subscribe((data: any) => {
      this.product = data;
    });
  }
}
