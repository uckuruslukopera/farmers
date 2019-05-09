import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent,
    CarouselComponent,
    ProductCardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],  
  exports: [
    SideBarComponent,
    CarouselComponent,
    ProductCardComponent,
    MenuComponent
  ]
})
export class SharedModule { }
