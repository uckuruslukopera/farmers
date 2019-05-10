import { CartItem } from './cart-item.interface';

export interface CartState {
    cartItems: CartItem[],
    itemsQty: number,
    total: number
}