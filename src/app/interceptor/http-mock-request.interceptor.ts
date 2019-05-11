import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import * as category from '../data/category.json';
import * as menu from '../data/menu.json';
import * as promotion from '../data/promotion.json';
import * as product from '../data/product.json';

const urls = [
    {
        url: `${environment.baseUrl}/category`,
        json: category
    },
    {
        url: `${environment.baseUrl}/category/1`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '1')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/2`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '2')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/3`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '3')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/4`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '4')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/5`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '5')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/6`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '6')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/7`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '7')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/8`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '8')[0] || {}
    },
    {
        url: `${environment.baseUrl}/category/9`,
        json: JSON.parse(JSON.stringify(category['default'])).filter(c => c.id === '9')[0] || {}
    },
    {
        url: `${environment.baseUrl}/menu`,
        json: menu
    },
    {
        url: `${environment.baseUrl}/promotion`,
        json: promotion
    },
    {
        url: `${environment.baseUrl}/category/1/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '1') || []
    },
    {
        url: `${environment.baseUrl}/category/2/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '2') || []
    },
    {
        url: `${environment.baseUrl}/category/3/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '3') || []
    },
    {
        url: `${environment.baseUrl}/category/4/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '4') || []
    },
    {
        url: `${environment.baseUrl}/category/5/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '5') || []
    },
    {
        url: `${environment.baseUrl}/category/6/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '6') || []
    },
    {
        url: `${environment.baseUrl}/category/7/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '7') || []
    },
    {
        url: `${environment.baseUrl}/category/8/product`,
        json: JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '9') || []
    },
    {
        url: `${environment.baseUrl}/category/9/product`,
        json: product
    }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!environment.useMockData) return next.handle(request);
        const mock = urls.find(u => u.url === request.url);
        if (mock) {
            console.log('Loaded from json : ' + request.url);
            return of(new HttpResponse({ status: 200, body: ((mock.json) as any).default || mock.json}));
        }
    }
}
