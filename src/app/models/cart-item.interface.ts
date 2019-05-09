import { Product } from './products.interface';

export interface CartItem {
    product: Product,
    qty: number,
    rowTotal: number
}