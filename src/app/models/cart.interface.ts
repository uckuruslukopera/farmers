import { CartItem } from './cart-item.interface';

export interface Cart {
    cartItems: CartItem[],
    itemsQty: number,
    total: number
}