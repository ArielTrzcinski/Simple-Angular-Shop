import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  succes: boolean = false;
  wrong: boolean = false;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.productsService.getProduct(
      +this.route.snapshot.params['id']
    )
    console.log(this.product)
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
