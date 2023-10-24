import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  vproducts!: Product[];
  shownArrany: any = [];
  constructor(private apiServ: ApiService) {}
  ngOnInit(): void {
    this.apiServ.viewedIdsobs.subscribe((data) => {
      this.shownArrany = data;
    });
    this.apiServ.getProducts().subscribe((data: any) => {
      this.vproducts = data
        .filter((item: any) => !this.shownArrany.includes(item.id))
        .slice(0, 3);
      console.log(this.vproducts);
    });
  }
}
