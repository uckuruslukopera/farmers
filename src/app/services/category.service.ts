import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.interface';
import { Product } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{

  endpoint: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.endpoint = 'category';
  }

  getCategories(): Observable<Category[]> {    
    return this.get<Category[]>(this.endpoint);
  }

  getCategory(categoryId: number): Observable<Category> {
    return this.get<Category>(`${this.endpoint}/${categoryId}`);
  }

  getCategoryProducts(categoryId: number): Observable<Product[]> {
    return this.get<Product[]>(`${this.endpoint}/${categoryId}/product`);
  }

}
