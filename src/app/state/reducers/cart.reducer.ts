import * as cart from '../actions/cart.action';
import { CartState } from 'src/app/models/cart-state.interface';
import { Cart } from 'src/app/models/cart.class';

export const initialState: CartState = {
    cartItems: [],
    total: 0,
    itemsQty: 0
}

export function reducer(state = initialState, action: cart.Actions) {
    switch (action.type) {
        case cart.ActionTypes.AddToCart:
            let newCart = new Cart([...state.cartItems]);
            newCart.addItem(action.payload);
            return newCart;
        default:
            return state;
    }

}