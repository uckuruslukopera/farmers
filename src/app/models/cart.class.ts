import { CartItem } from './cart-item.interface';
import { Product } from './product.interface';

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
        this.calculateCart();
    }

    removeFromCart(product: Product): void {
        this.cartItems = this.cartItems.filter(c => c.product.id !== product.id);
        this.calculateCart();
    }

    updateItemQty(product: Product, qty: number): void {
        let i = this.cartItems.findIndex(c => c.product.id === product.id);
        if(i > -1) {
            this.cartItems[i] = {
                product: product,
                qty: qty,
                rowTotal: qty * product.price
            };
            this.calculateCart();
        }
    }

    emptyCart(): void {
        this.cartItems = [];
        this.calculateCart();
    }

    private calculateCart() {
        this.calculateItemsQty();
        this.calculateTotal();
    }

    private calculateItemsQty() {
        this.itemsQty = this.cartItems.reduce(((acc, curr) => acc += curr.qty), 0);
    }

    private calculateTotal() {
        this.total = this.cartItems.reduce(((acc, curr) => acc += curr.rowTotal), 0);
    }
}