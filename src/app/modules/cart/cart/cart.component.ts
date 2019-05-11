import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.interface';
import * as fromRoot from './../../../state/reducers/index'
import { RemoveFromCartAction, EmptyCartAction, UpdateItemQtyAction } from 'src/app/state/actions/cart.action';
import { SetSidebarAction } from 'src/app/state/actions/sidebar.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;
  cartItemsQty$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.cartItems$ = store.select(fromRoot.getCartItems);
    this.cartTotal$ = store.select(fromRoot.getCartTotal);
    this.cartItemsQty$ = store.select(fromRoot.getCartItemsQty);
  }

  ngOnInit() {
    this.store.dispatch(new SetSidebarAction({title: 'Sepetim'}));
  }

  removeFromCart(e, product) {
    this.store.dispatch(new RemoveFromCartAction(product));
  }

  updateItemQty(e, product) {
    this.store.dispatch(new UpdateItemQtyAction({product: product, qty: e}));
  }

  emptyCart(e) {
    this.store.dispatch(new EmptyCartAction());
  }

}
