import { Action } from '@ngrx/store';

export enum ActionTypes {
    SetSidebar = '[Sidebar] Set'
}

export class SetSidebarAction implements Action {
    readonly type = ActionTypes.SetSidebar;

    constructor(public payload: {title: string, showMenu?: boolean}) {}
}

export type Actions =
    | SetSidebarAction
