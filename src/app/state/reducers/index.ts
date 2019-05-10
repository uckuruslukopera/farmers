import * as fromCart from "./cart.reducer";
import { CartState } from 'src/app/models/cart-state.interface';

interface State {
    cart: CartState
}

export const reducers = {
    cart: fromCart.reducer
}