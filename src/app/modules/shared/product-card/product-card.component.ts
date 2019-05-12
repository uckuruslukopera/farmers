import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { Store } from '@ngrx/store';
import { AddToCartAction } from 'src/app/state/actions/cart.action';
import { CartState } from 'src/app/models/cart-state.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  
  constructor(
    private store: Store<CartState>
  ) {}

  ngOnInit() {
  }

  addToCart(e) {
    this.store.dispatch(new AddToCartAction(this.product));
  }

}
