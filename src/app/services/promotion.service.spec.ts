import { PromotionService } from './Promotion.service';
import * as promotion from '../data/promotion.json';
import { asyncData } from 'src/testing/async-observable-helpers';


describe('PromotionService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: PromotionService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new PromotionService(<any>httpClientSpy);
    });

    describe('getPromotions', () => {

        it('should return an observable of promotion items', () => {
            const expectedPromotions = promotion['default'];
            httpClientSpy.get.and.returnValue(asyncData(expectedPromotions));

            service.getPromotions().subscribe(
                response => expect(response).toEqual(expectedPromotions, 'expected promotions'),
                fail
            );

            expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        });
    });
    
});