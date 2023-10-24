import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  shownArr:any = []
  constructor(private apiService: ApiService, private route :Router) {}
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((product: any) => {
      this.products = product.slice(0, 4);
      this.products.map((item)=>{
        this.shownArr.push(item.id)
      this.apiService.viewedIds.next(this.shownArr)
      })
    });
  }
  showAll(){
    this.route.navigate(['/Products/all'])
  }
}
