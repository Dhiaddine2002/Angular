import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string ="dhia";

  listProdcut!: Product[];
  pricemax!:number;
  constructor() { }

  ngOnInit(): void {
    this.listProdcut=[
      {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }
  buy(i : number){
    this.listProdcut[i].quantity--;
  }
  like(i: number) {
    this.listProdcut[i].like++;
  }

}
