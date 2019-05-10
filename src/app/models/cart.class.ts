import { CartItem } from './cart-item.interface';
import { Product } from './products.interface';

export class Cart{

    cartItems: CartItem[];
    itemsQty: number;
    total: number;

    constructor(cartItems: CartItem[]) {
        this.cartItems = [...cartItems];
    }

    addItem(product: Product, qty = 1) {
        let i = this.cartItems.findIndex(c => c.product.id === product.id);
        if(i > -1) {
            this.cartItems[i].qty += qty;
            this.cartItems[i].rowTotal += qty * product.price;
        } else {
            this.cartItems = [...this.cartItems, {
                product: product,
                qty: qty,
                rowTotal: qty * product.price
            }];
        }
        this.itemsQty = this.cartItems.reduce(((acc, curr) => acc += curr.qty), 0);
        this.total = this.cartItems.reduce(((acc, curr) => acc += curr.rowTotal), 0);
    }
}