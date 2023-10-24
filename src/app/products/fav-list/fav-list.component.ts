import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';
import { FavService } from 'src/app/shared/services/fav.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss']
})
export class FavListComponent implements OnInit {
  favItems: Product[] = []
  constructor(private fav: FavService,private loaderSer:LoaderService) { }
  ngOnInit(): void {
    this.loaderSer.toggleStauts(false)
    this.fav.favItemsobs.subscribe((item) => {
      this.favItems = item
    })
  }
}
