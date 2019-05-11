import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { NumberStepperComponent } from './number-stepper/number-stepper.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ProductCardComponent,
    ProductCardListComponent,    
    NumberStepperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],  
  exports: [
    CarouselComponent,
    ProductCardComponent,
    ProductCardListComponent,
    NumberStepperComponent
  ]
})
export class SharedModule { }
