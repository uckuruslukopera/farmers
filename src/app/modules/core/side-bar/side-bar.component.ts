import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Category } from 'src/app/models/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import * as fromRoot from './../../../state/reducers/index'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  subscription: Subscription;
  categories: Category[] = [];
  title$: Observable<string>;
  showMenu$: Observable<boolean>;

  constructor(
    private categoriesService: CategoriesService,
    private store: Store<AppState>
  ) {
    this.title$ = store.select(fromRoot.getTitle);
    this.showMenu$ = store.select(fromRoot.getShowMenu);
  }

  ngOnInit() {
    this.subscription = this.categoriesService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = [...response];
      }, error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
