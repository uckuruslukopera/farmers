import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseService {

  endpoint: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.endpoint = 'menu';
  }

  getMenu(): Observable<MenuItem[]> {
    return this.get<MenuItem[]>(this.endpoint);
  }
}
