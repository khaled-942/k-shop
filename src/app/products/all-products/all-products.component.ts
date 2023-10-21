import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products!: Product[];
  constructor(private apiServ: ApiService) {}
  ngOnInit(): void {
    this.apiServ.getProducts().subscribe((product: any) => {
      this.products = product;
    });
  }
}
