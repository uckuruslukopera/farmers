import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;
  categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.subscription = this.categoriesService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = [...response];
        console.log(this.categories);
      }, error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
