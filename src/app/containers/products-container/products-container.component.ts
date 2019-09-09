import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { products } from 'src/app/models/products';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  products: Product[] = products;

  constructor() {}

  ngOnInit() {}

  share({ name }) {
    window.alert(`The product ${name} has been shared!`);
  }

  onProductNotify({ name }) {
    window.alert(`You will be notified when the product ${name} goes on sale`);
  }
}