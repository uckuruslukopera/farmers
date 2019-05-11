import * as fromCart from "./cart.reducer";
import * as fromSidebar from "./sidebar.reducer";
import { AppState } from 'src/app/models/app-state.interface';

export const reducers = {
    cart: fromCart.reducer,
    sidebar: fromSidebar.reducer
}

export const getCartItemsQty = (state: AppState) => state.cart.itemsQty;
export const getCartItems = (state: AppState) => state.cart.cartItems;
export const getCartTotal = (state: AppState) => state.cart.total;
export const getTitle = (state: AppState) => state.sidebar.title;
export const getShowMenu = (state: AppState) => state.sidebar.showMenu;