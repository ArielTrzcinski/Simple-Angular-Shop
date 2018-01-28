import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { CoreService } from '../../core/core.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any[];
  singleProduct: any;
  @Input() filterBy?:string;
  succes: boolean = false;
  wrong: boolean = false;
  
  constructor(private productsService: ProductsService,
              private coreService: CoreService) {}

  ngOnInit() {
    this.products = this.productsService.products;
    this.filterBy = this.coreService.typeOfProduct;
  }

  addToCart(product, quantity: number) {
    if(quantity >= 1) {
      product.totalCost = product.price*quantity;
      product.quantity = quantity;
      this.productsService.cartList.push(product);
      this.succes = true;
      setTimeout(() => {
        this.succes = false;
      }, 2000);
    } else {
      this.wrong = true;
      setTimeout(() => {
        this.wrong = false;
      }, 2000);
    }
  }
}
