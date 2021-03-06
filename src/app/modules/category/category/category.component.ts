import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { Subscription, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
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
    private router: Router,
    private categoryService: CategoryService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(response => {
      const id = +response['id'];

      this.categoryService.getCategory(id).subscribe(
        (category: Category) => {
          this.store.dispatch(new SetSidebarAction({title: category.name, showMenu: true}));
        }, error => this.router.navigate(['/page-not-found'])
      );

      this.categoryService.getCategoryProducts(id).subscribe(
        (products: Product[]) => {
          this.products = [...products];
        },
        error => console.log(error)
      );
    });


  }

}
