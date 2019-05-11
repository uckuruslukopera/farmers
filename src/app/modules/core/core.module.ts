import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ShoppingCartComponent, SideBarComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MenuComponent
  ]
})
export class CoreModule { }
