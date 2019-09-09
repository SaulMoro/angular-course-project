import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() shared = new EventEmitter();
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onShareClicked() {
    this.shared.emit();
  }

  onNotifyClicked() {
    this.notify.emit();
  }
}
