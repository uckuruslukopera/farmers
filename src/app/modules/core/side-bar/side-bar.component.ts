import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import * as fromRoot from './../../../state/reducers/index'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  subscription: Subscription;
  menu: MenuItem[];
  title$: Observable<string>;
  showMenu$: Observable<boolean>;

  constructor(
    private menuService: MenuService,
    private store: Store<AppState>
  ) {
    this.title$ = store.select(fromRoot.getTitle);
    this.showMenu$ = store.select(fromRoot.getShowMenu);
  }

  ngOnInit() {
    this.subscription = this.menuService.getMenu().subscribe(
      (response: MenuItem[]) => {
        this.menu = [...response];
      }, error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
