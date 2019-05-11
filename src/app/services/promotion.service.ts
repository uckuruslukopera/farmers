import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Promotion } from '../models/promotion.interface';

@Injectable({
  providedIn: 'root'
})
export class PromotionService extends BaseService{

  endpoint: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.endpoint = 'promotion';
  }

  getPromotions(): Observable<Promotion[]> {
    return this.get<Promotion[]>(this.endpoint);
  }
}
