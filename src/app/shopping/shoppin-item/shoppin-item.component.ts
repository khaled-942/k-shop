import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-shoppin-item',
  templateUrl: './shoppin-item.component.html',
  styleUrls: ['./shoppin-item.component.scss']
})
export class ShoppinItemComponent implements OnInit {
  constructor(private cartitems: CartService) { }
  @Input() itemCart!: Product
  ngOnInit(): void {
    this.itemCart.totalQMP = this.cartitems.calcTotal(this.itemCart);
  }
  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return undefined;
    }
  };
  addMore(id: number) {
    this.cartitems.more(id)
  }

  removeMore(id: number) {
    this.cartitems.less(id)
  }

  deleteItem() {
    this.cartitems.removeSpecificItem(this.itemCart)
  }
}
