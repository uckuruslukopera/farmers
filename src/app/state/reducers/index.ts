import * as fromCart from "./cart.reducer";
import { State } from 'src/app/models/state.interface';

export const reducers = {
    cart: fromCart.reducer
}

export const getCartItemsQty = (state: State) => state.cart.itemsQty;