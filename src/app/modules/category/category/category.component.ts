import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { Subscription, Observable } from 'rxjs';
import { Product } from 'src/app/models/products.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';
import { SetSidebarAction } from 'src/app/state/actions/sidebar.action';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: Product[];
  paramsSubscription: Subscription;
  productsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(response => {
      const id = +response['id'];

      this.categoryService.getCategory(id).subscribe(
        (response: Category) => {
          this.store.dispatch(new SetSidebarAction({title: response.name, showMenu: true}))
        }
      )

      this.categoryService.getCategoryProducts(id).subscribe(
        (products: Product[]) => {
          this.products = [...products];
        },
        error => console.log(error)
      );
    });


  }

}
