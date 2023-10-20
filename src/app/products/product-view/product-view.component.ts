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
  constructor(private apiServ: ApiService) {}
  ngOnInit(): void {
    this.apiServ.getProducts().subscribe((data: any) => {
      this.vproducts = data.slice(0,3);
    });
  }
}
