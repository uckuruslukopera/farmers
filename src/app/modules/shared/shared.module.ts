import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { NumberStepperComponent } from './number-stepper/number-stepper.component';

@NgModule({
  declarations: [
    SideBarComponent,
    CarouselComponent,
    ProductCardComponent,
    MenuComponent,
    ProductCardListComponent,    
    NumberStepperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],  
  exports: [
    SideBarComponent,
    CarouselComponent,
    ProductCardComponent,
    MenuComponent,
    ProductCardListComponent,
    NumberStepperComponent
  ]
})
export class SharedModule { }
