import * as cart from '../actions/cart.action';
import { CartState } from 'src/app/models/cart-state.interface';
import { Cart } from 'src/app/models/cart.class';

export const initialState: CartState = {
    cartItems: [],
    total: 0,
    itemsQty: 0
}

// export const initialState: CartState = {"cartItems":[{"product":{"id":1,"categoryId":1,"createdAt":"2019-05-09T03:37:25.188Z","name":"Tasty Concrete Salad","price":542.00,"image":"http://lorempixel.com/640/480/animals"},"qty":1,"rowTotal":542}],"itemsQty":1,"total":542};

export function reducer(state = initialState, action: cart.Actions) {
    const newCart = new Cart([...state.cartItems]);
    switch (action.type) {
        case cart.ActionTypes.AddToCart:
            newCart.addItem(action.payload);
            return newCart;
        case cart.ActionTypes.RemoveFromCart:
            newCart.removeFromCart(action.payload);
            return newCart;
        case cart.ActionTypes.UpdateItemQty:
            newCart.updateItemQty(action.payload.product, action.payload.qty);
            return newCart;
        case cart.ActionTypes.EmptyCart:
            newCart.emptyCart();
            return newCart;
        default:
            return state;
    }

}