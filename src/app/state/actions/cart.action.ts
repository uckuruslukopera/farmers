import { Action } from '@ngrx/store'
import { Product } from 'src/app/models/products.interface';

export enum ActionTypes {
    AddToCart = '[Cart] Add',
    RemoveFromCart = '[Cart] Remove',
    UpdateItemQty = '[Cart] Update',
    EmptyCart = '[Cart] Empty'
 }

export class AddToCartAction implements Action {
  readonly type = ActionTypes.AddToCart;
  
  constructor(public payload: Product) {}
}

export class RemoveFromCartAction implements Action {
  readonly type = ActionTypes.RemoveFromCart;

  constructor(public payload: Product) {}
}

export class UpdateItemQtyAction implements Action {
  readonly type = ActionTypes.UpdateItemQty;

  constructor(public payload: {product: Product, qty: number}) {}
}

export class EmptyCartAction implements Action {
  readonly type = ActionTypes.EmptyCart;
}

export type Actions =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateItemQtyAction
  | EmptyCartAction