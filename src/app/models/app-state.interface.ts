import { CartState } from './cart-state.interface';
import { SidebarState } from './sidebar-state.interface';

export interface AppState {
    cart: CartState,
    sidebar: SidebarState
}