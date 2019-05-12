import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import * as category from '../data/category.json';
import * as product from '../data/product.json';
import { asyncError, asyncData } from 'src/testing/async-observable-helpers';
import { HttpErrorResponse } from '@angular/common/http';

describe('CategoryService', () => {

    let httpClientSpy: { get: jasmine.Spy };
    let service: CategoryService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new CategoryService(<any>httpClientSpy);
    });

    describe('getCategories', () => {

        it('should return an observable of categories', () => {
            const expectedCategories = category['default'];
            httpClientSpy.get.and.returnValue(asyncData(expectedCategories));
    
            service.getCategories().subscribe(
                response => expect(response).toEqual(expectedCategories, 'expected categories'),
                fail
            );
    
            expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        });
    });

    describe('getCategory(:id)', () => {
        it('should return an observable of the category with id = 1', () => {
            const expectedCategory = category['default'][0];
            httpClientSpy.get.and.returnValue(asyncData(expectedCategory));
    
            service.getCategory(1).subscribe(
                response => expect(response).toEqual(expectedCategory, 'expected category'),
                fail
            );

            expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        });

        it('should return an error when the server returns a 404', () => {
            const errorResponse = new HttpErrorResponse({
              error: 'Not found',
              status: 404, statusText: 'Not Found'
            });
    
            httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    
            service.getCategory(15).subscribe(
              () => fail('expected an error, not a category'),
              error  => expect(error.message).toContain('Not Found')
            );
        });
    });

    describe('getCategoryProducts(:id)', () => {
        it('should return an observable of the products of the category with id = 1', () => {
            const expectedProducts = JSON.parse(JSON.stringify(product['default'])).filter(c => c.categoryId === '1')
            httpClientSpy.get.and.returnValue(asyncData(expectedProducts));
    
            service.getCategory(1).subscribe(
                response => expect(response).toEqual(expectedProducts, 'expected products'),
                fail
            );
    
            expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        });
    
        it('should return an error when the server returns a 404', () => {
            const errorResponse = new HttpErrorResponse({
              error: 'Not found',
              status: 404, statusText: 'Not Found'
            });
    
            httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    
            service.getCategoryProducts(15).subscribe(
              () => fail('expected an error, not products'),
              error  => expect(error.message).toContain('Not Found')
            );
        });
    });
});
