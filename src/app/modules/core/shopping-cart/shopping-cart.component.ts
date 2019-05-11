import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/app-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from './../../../state/reducers/index'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItemsQty$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.cartItemsQty$ = store.select(fromRoot.getCartItemsQty);
  }

  ngOnInit() {
  }

}
