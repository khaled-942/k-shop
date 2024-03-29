import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { PRecentViewComponent } from './product-view/p-recent-view/p-recent-view.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { RatesComponent } from './rates/rates.component';
import { PipesModModule } from '../pipes/pipes-mod/pipes-mod.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { SearchComponent } from './search/search.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
@NgModule({
    declarations: [
        ProductListComponent,
        ProductItemComponent,
        ProductDetailsComponent,
        ProductsHomeComponent,
        ProductViewComponent,
        PRecentViewComponent,
        RatesComponent,
        AllProductsComponent,
        SearchComponent,
        FavListComponent
    ],
    imports: [
        CommonModule,
        NgbRatingModule,
        RatingModule,
        TagModule,
        DividerModule,
        PipesModModule,
        FormsModule,
        ToggleButtonModule,
        ProductsRoutingModule,
    ],
    exports:[
        ProductItemComponent,
    ]
})
export class ProductsModule { }
