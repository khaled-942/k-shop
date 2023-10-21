import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ShareProductDetailsService } from 'src/app/shared/services/share-product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  otherProducts!: Product[];
  constructor(
    private details: ShareProductDetailsService,
    private apiServ: ApiService,
    private cartitems:CartService
  ) {}
  ngOnInit(): void {
    this.details.productDetailsObserv.subscribe((data: any) => {
      this.product = data;
    });
    this.apiServ.getProducts().subscribe((data: any) => {
      this.otherProducts = data.filter((el:any) => el.id != this.product.id).slice(0,4);
    });
  }
  addToCart(){
    this.cartitems.addProductToCart(this.product);
  }
}
