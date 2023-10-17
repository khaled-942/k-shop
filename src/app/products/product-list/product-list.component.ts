import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((product:any)=>{
      this.products = product;
    })
  }
}
