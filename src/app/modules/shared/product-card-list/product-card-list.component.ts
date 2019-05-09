import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/products.interface';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}
