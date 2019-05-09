import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category;
  products: Product[];
  paramsSubscription: Subscription;
  categorySubscription: Subscription;
  productsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(response => {
      const id = +response['id'];

      this.categoriesService.getCategory(id).subscribe(
        (category: Category) => {
          this.category = {...category};
        },
        error => console.log(error)
      );

      this.categoriesService.getCategoryProducts(id).subscribe(
        (products: Product[]) => {
          this.products = [...products];
        },
        error => console.log(error)
      );

    });


  }

}
