import { SidebarState } from 'src/app/models/sidebar-state.interface';
import * as sidebar from '../actions/sidebar.action';

export const initialState: SidebarState = {
    title: '',
    showMenu: false
}

export function reducer(state = initialState, action: sidebar.Actions) {
    switch (action.type) {
        case sidebar.ActionTypes.SetSidebar:
            return {...action.payload};
        default:
            return state;
    }
}