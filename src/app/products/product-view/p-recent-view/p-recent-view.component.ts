import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/productInterface';

@Component({
  selector: 'app-p-recent-view',
  templateUrl: './p-recent-view.component.html',
  styleUrls: ['./p-recent-view.component.scss'],
})
export class PRecentViewComponent {
  @Input() otherproducts!: Product;
}
