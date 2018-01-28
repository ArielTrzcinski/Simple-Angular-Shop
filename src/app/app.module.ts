import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreService } from './core/core.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ProductsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ProductsService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
