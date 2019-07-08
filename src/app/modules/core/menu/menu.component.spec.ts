import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let linkDebugElement: DebugElement;

    const mockMenu = [
        {
            id: 1,
            createdAt: '2019-05-11T03:11:23.965Z',
            name: 'Meyve, Sebze',
            url: 'category/1'
        },
        {
            id: 1,
            createdAt: '2019-05-10T12:13:45.587Z',
            name: 'Et, Balık, Kümes',
            url: 'category/2'
        }
    ];

    const mockRoutes = [
        {
            path: 'category',
            loadChildren: () => import('../../../modules/category/category.module').then(m => m.CategoryModule)
        },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(mockRoutes)],
            declarations: [MenuComponent]
        });
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        linkDebugElement = fixture.debugElement.query(By.css('div'));
        fixture.detectChanges();
    });

    it('should create', () => {
        component.menu = mockMenu;
        expect(component).toBeTruthy();
    });

    it('can get routerLinks from template', () => {
        component.menu = mockMenu;
        fixture.detectChanges();
        expect(linkDebugElement.children.length).toBe(2);
        expect(linkDebugElement.children[0].nativeElement.getAttribute('href')).toBe('/category/1');
        expect(linkDebugElement.children[1].nativeElement.getAttribute('href')).toBe('/category/2');
    });
});

