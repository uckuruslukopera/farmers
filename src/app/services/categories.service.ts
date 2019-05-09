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

  endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = `${environment.url}/categories`;
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.endpoint);
  }

  getCategoryProducts(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}/${categoryId}/products`);
  }
}
