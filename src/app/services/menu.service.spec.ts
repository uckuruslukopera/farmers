import { MenuService } from './menu.service';
import * as menu from '../data/menu.json';
import { asyncData } from 'src/testing/async-observable-helpers';


describe('MenuService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: MenuService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new MenuService(<any>httpClientSpy);
    });

    describe('getMenu', () => {

        it('should return an observable of menu items', () => {
            const expectedMenuItems = menu['default'];
            httpClientSpy.get.and.returnValue(asyncData(expectedMenuItems));

            service.getMenu().subscribe(
                response => expect(response).toEqual(expectedMenuItems, 'expected menu items'),
                fail
            );

            expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        });
    });
    
});
