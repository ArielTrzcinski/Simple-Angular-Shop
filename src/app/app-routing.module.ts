import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { BasketComponent } from './products/basket/basket.component';

const appRoute: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wszystko' },
  { path: 'wszystko', component: ProductsListComponent },
  { path: 'klasyczne', component: ProductsListComponent },
  { path: 'smakowe', component: ProductsListComponent },
  { path: 'akcesoria', component: ProductsListComponent },
  { path: 'koszyk', component: BasketComponent },
  { path: 'produkt/:id', component: ProductDetailComponent }
];  

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
