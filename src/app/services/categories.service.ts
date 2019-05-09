import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Category } from '../models/category.interface';
import { Product } from '../models/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.url}/categories`);
  }

  getCategoryProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url}/categories/${categoryId}/products`);
  }
}
