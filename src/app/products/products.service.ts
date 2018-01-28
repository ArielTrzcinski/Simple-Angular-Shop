import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  cartList: any[] = [];

  products: any[] = [
    {"id": 1, "category": "klasyczne", "price": 17.99, "totalCost": 0, "quantity": 0, "caption": "Barao de Cotegipe", "url": "assets/img/klasyczne_01.png"},
    {"id": 2, "category": "klasyczne", "price": 18.99, "totalCost": 0, "quantity": 0,  "caption": "Campeche", "url": "assets/img/klasyczne_02.png"},
    {"id": 3, "category": "klasyczne", "price": 16.99, "totalCost": 0, "quantity": 0,  "caption": "Campesino", "url": "assets/img/klasyczne_03.png"},
    {"id": 4, "category": "klasyczne", "price": 19.99, "totalCost": 0, "quantity": 0,  "caption": "Canarias", "url": "assets/img/klasyczne_04.png"},
    {"id": 5, "category": "smakowe", "price": 23.99, "totalCost": 0, "quantity": 0,  "caption": "Campesino Anise", "url": "assets/img/smakowe_01.png"},
    {"id": 6, "category": "smakowe", "price": 21.99, "totalCost": 0, "quantity": 0,  "caption": "Campesino Menta Limon", "url": "assets/img/smakowe_02.png"},
    {"id": 7, "category": "smakowe", "price": 25.99, "totalCost": 0, "quantity": 0,  "caption": "CBSe Frutos Tropicales", "url": "assets/img/smakowe_03.png"},
    {"id": 8, "category": "smakowe", "price": 24.99, "totalCost": 0, "quantity": 0,  "caption": "CBSe Naranja", "url": "assets/img/smakowe_04.png"},
    {"id": 9, "category": "akcesoria", "price": 12.99, "totalCost": 0, "quantity": 0,  "caption": "Bombilla", "url": "assets/img/akcesoria_01.png"},
    {"id": 10, "category": "akcesoria", "price": 15.99, "totalCost": 0, "quantity": 0,  "caption": "Bombilla", "url": "assets/img/akcesoria_02.png"},
    {"id": 11, "category": "akcesoria", "price": 34.99, "totalCost": 0, "quantity": 0,  "caption": "Naczynie do Yerba Mate", "url": "assets/img/akcesoria_03.png"},
    {"id": 12, "category": "akcesoria", "price": 38.99, "totalCost": 0, "quantity": 0,  "caption": "Naczynie do Yerba Mate", "url": "assets/img/akcesoria_04.png"},
  ];

  // products = [];

  getProducts(){
    return this.products = this.products.slice(0);
  }

  getProduct(id:number){
    return this.products.slice(0).find(product => product.id == id)
  }

  constructor() { }

}

// const PRODUCTS = [
//   {"id": 1, "category": "klasyczne", "caption": "Lorem Ipsum", "url": "assets/img/klasyczne_01.png"},
//   {"id": 2, "category": "klasyczne", "caption": "Lorem Ipsum", "url": "assets/img/klasyczne_02.png"},
//   {"id": 3, "category": "klasyczne", "caption": "Lorem Ipsum", "url": "assets/img/klasyczne_03.png"},
//   {"id": 4, "category": "klasyczne", "caption": "Lorem Ipsum", "url": "assets/img/klasyczne_04.png"},
//   {"id": 5, "category": "smakowe", "caption": "Lorem Ipsum", "url": "assets/img/smakowe_01.png"},
//   {"id": 6, "category": "smakowe", "caption": "Lorem Ipsum", "url": "assets/img/smakowe_02.png"},
//   {"id": 7, "category": "smakowe", "caption": "Lorem Ipsum", "url": "assets/img/smakowe_03.png"},
//   {"id": 8, "category": "smakowe", "caption": "Lorem Ipsum", "url": "assets/img/smakowe_04.png"},
//   {"id": 9, "category": "akcesoria", "caption": "Lorem Ipsum", "url": "assets/img/akcesoria_01.png"},
//   {"id": 10, "category": "akcesoria", "caption": "Lorem Ipsum", "url": "assets/img/akcesoria_02.png"},
//   {"id": 11, "category": "akcesoria", "caption": "Lorem Ipsum", "url": "assets/img/akcesoria_03.png"},
//   {"id": 12, "category": "akcesoria", "caption": "Lorem Ipsum", "url": "assets/img/akcesoria_04.png"},
// ];
