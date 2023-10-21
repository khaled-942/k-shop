import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { ApiService } from 'src/app/shared/services/api.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchProducts: Product[] =[];
  textRecived!: string;
  constructor(private search:SearchService, private api : ApiService) {}
  ngOnInit(): void {
    this.search.searchTextobserv.subscribe((text)=>{
      console.log(text)
      this.textRecived = text;
      this.api.filterByName(this.textRecived).subscribe((data:any)=>{
        this.searchProducts = data
      })
    })
  }
}
