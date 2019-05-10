import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers/index';

import { ToastrModule } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { CartEffect } from './state/effects/cart.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    ToastrModule.forRoot(),
    EffectsModule.forRoot([CartEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
