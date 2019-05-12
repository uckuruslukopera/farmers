import { Product } from './product.interface';

export interface CartItem {
    product: Product,
    qty: number,
    rowTotal: number
}