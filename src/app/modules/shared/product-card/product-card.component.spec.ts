import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { reducers } from 'src/app/state/reducers';
import { StoreModule, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';
import { AddToCartAction } from 'src/app/state/actions/cart.action';


describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let store: Store<AppState>;

  const mockProduct = {
    id: 33,
    categoryId: 6,
    name: 'Incredible Rubber Shoes',
    price: 658.00,
    image: 'http://lorempixel.com/640/480/abstract/5'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
      ],
      declarations: [ProductCardComponent]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the image of the product', () => {
    const element = fixture.debugElement.query(By.css('.product-card--image')).nativeElement;
    expect(element.src).toEqual(mockProduct.image);
  });

  it('should display the name of the product', () => {
    const element = fixture.debugElement.query(By.css('.product-card--name')).nativeElement;
    expect(element.textContent).toEqual(mockProduct.name);
  });

  it('should display the price of the product', () => {
    const element = fixture.debugElement.query(By.css('.product-card--price')).nativeElement;
    expect(element.textContent).toEqual(`${mockProduct.price.toString()} TL`);
  });

  it('should display an add to cart button', () => {
    const element = fixture.debugElement.query(By.css('.btn')).nativeElement;
    expect(element.textContent).toEqual('Sepete Ekle');
  });

  it('should dispatch an action when add to cart button is clicked', () => {
    const debugElement = fixture.debugElement.query(By.css('.btn'));
    debugElement.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(new AddToCartAction(component.product));
  });
});
