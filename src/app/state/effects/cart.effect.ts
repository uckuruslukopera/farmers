import { ActionTypes, AddToCartAction, RemoveFromCartAction, UpdateItemQtyAction } from '../actions/cart.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
 
@Injectable()
export class CartEffect {
    @Effect({dispatch: false})
    itemAdded$ = this.actions$.pipe(
        ofType(ActionTypes.AddToCart),
        tap((action: AddToCartAction) => this.toastrService.success(`<b>${action.payload.name}</b> sepete eklendi`, '', {enableHtml: true, closeButton: true, positionClass: 'toast-bottom-left'}))
    );

    @Effect({dispatch: false})
    itemRemoved$ = this.actions$.pipe(
        ofType(ActionTypes.RemoveFromCart),
        tap((action: RemoveFromCartAction) => this.toastrService.success(`<b>${action.payload.name}</b> sepetten çıkarıldı`, '',{enableHtml: true,closeButton: true, positionClass: 'toast-bottom-left'}))
    );

    @Effect({dispatch: false})
    itemUpdated$ = this.actions$.pipe(
        ofType(ActionTypes.UpdateItemQty),
        tap((action: UpdateItemQtyAction) => this.toastrService.success(`<b>${action.payload.product.name}</b> ürün sayısı güncellendi`, '',{enableHtml: true,closeButton: true, positionClass: 'toast-bottom-left'}))
    );

    @Effect({dispatch: false})
    cartDeleted$ = this.actions$.pipe(
        ofType(ActionTypes.EmptyCart),
        tap(() => this.toastrService.success('Sepetiniz temizlendi', '',{closeButton: true, positionClass: 'toast-bottom-left'}))
    );
 
    constructor(
        private actions$: Actions,
        private toastrService: ToastrService
    ) {}
}