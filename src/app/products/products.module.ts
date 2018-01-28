import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BasketComponent } from './basket/basket.component';
import { ProductFilterPipe } from './filter.pipe';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    FormsModule
  ],
  exports: [ProductsListComponent, ProductFilterPipe],
  declarations: [ProductsListComponent, ProductDetailComponent, BasketComponent, ProductFilterPipe]
})
export class ProductsModule { }
