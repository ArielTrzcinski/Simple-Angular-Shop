import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  cartList: any[] = [];
  total: number;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.cartList = this.productsService.cartList;
    this.countTotalCost(this.cartList);
    console.log(this.total);
  }

  countTotalCost(arr){
    if(this.cartList.length > 0) {
      this.total = arr.map((arrTotal) => arrTotal.totalCost).reduce((prev, next) => prev + next);
    }
  }

  removeFromCart(arr, attr, value) {
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);
       }
    }
    this.countTotalCost(this.cartList);
    
  }
}
