import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/models/media.interface';
import { CategoriesService } from 'src/app/services/categories.service';
import { Product } from 'src/app/models/products.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promotions: Media[] = [
    {
      image: 'http://lorempixel.com/900/350/food',
      name: 'Meyve, Sebze',
      link: '/category/1'
    },
    {
      image: 'http://lorempixel.com/900/350/fashion',
      name: 'İçecekler',
      link: '/category/2'
    },
    {
      image: 'http://lorempixel.com/900/350/people',
      name: 'Atıştırmalıklar',
      link: '/category/3'
    }
  ]

  featuredProducts: Product[];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategoryProducts(+environment.featuredCategory).subscribe(
      (products: Product[]) => {
        this.featuredProducts = [...products];
      },
      error => console.log(error)
    );
  }

}
