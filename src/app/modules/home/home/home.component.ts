import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { AppState } from 'src/app/models/app-state.interface';
import { Store } from '@ngrx/store';
import { SetSidebarAction } from 'src/app/state/actions/sidebar.action';
import { Promotion } from 'src/app/models/promotion.interface';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promotions: Promotion[];
  featuredProducts: Product[];

  constructor(
    private promotionService: PromotionService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new SetSidebarAction({title: 'Kategoriler', showMenu: true}));

    this.promotionService.getPromotions().subscribe(
      (response: Promotion[]) => {
        this.promotions = response;
      }
    )
  }

}
