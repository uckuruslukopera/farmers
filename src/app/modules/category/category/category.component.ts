import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';
import { SetSidebarAction } from 'src/app/state/actions/sidebar.action';

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
    private categoriesService: CategoriesService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(response => {
      const id = +response['id'];

      this.store.dispatch(new SetSidebarAction({title: 'Kategori Adı', showMenu: true}));

      this.categoriesService.getCategoryProducts(id).subscribe(
        (products: Product[]) => {
          this.products = [...products];
        },
        error => console.log(error)
      );

    });


  }

}
