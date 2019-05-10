import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/models/state.interface';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.interface';
import * as fromRoot from './../../../state/reducers/index'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  constructor(
    private store: Store<State>
  ) {
    this.cartItems$ = store.select(fromRoot.getCartItems);
    this.cartTotal$ = store.select(fromRoot.getCartTotal);
  }

  ngOnInit() {
    
  }

  updateItemQty(e, product) {

  }

  removeFromCart(e, product) {

  }

  emptyCart(e) {
    
  }

}
