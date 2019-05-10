import { Action } from '@ngrx/store'
import { Product } from 'src/app/models/products.interface';

export enum ActionTypes {
    AddToCart = '[Cart] Add'
}

export class AddToCartAction implements Action {
  readonly type = ActionTypes.AddToCart;
  
  constructor(public payload: Product) {}
}

export type Actions =
  | AddToCartAction