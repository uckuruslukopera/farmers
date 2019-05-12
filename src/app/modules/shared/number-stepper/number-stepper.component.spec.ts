import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberStepperComponent } from './number-stepper.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('NumberStepperComponent', () => {
  let component: NumberStepperComponent;
  let fixture: ComponentFixture<NumberStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberStepperComponent]
    });
    fixture = TestBed.createComponent(NumberStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.value = 5;
    expect(component).toBeTruthy();
  });

  it('should display the input value in the input element', () => {
    const element = fixture.debugElement.query(By.css('.number-stepper--input')).nativeElement;
    const expectedValue = 5;
    component.value = expectedValue;
    fixture.detectChanges();
    expect(element.value).toEqual(expectedValue.toString());
  });

  it('should disable the minus button if the value is 1', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('.number-stepper--minus')).nativeElement;
    component.value = 1;
    fixture.detectChanges();
    expect(element.classList).toContain('disabled');
  });

  it('should emit the updated value when the plus button is clicked', () => {
    let updatedValue: number;
    const inputValue = 1;
    const plusButton: DebugElement = fixture.debugElement.query(By.css('.number-stepper--plus'));

    component.value = inputValue;
    fixture.detectChanges();
    component.valueChanged.subscribe(value => updatedValue = value);

    plusButton.triggerEventHandler('click', null);
    expect(updatedValue).toBe(inputValue + 1);
  });

  it('should emit the updated value when the minus button is clicked', () => {
    let updatedValue: number;
    const inputValue = 3;
    const minusButton: DebugElement = fixture.debugElement.query(By.css('.number-stepper--minus'));

    component.value = inputValue;
    fixture.detectChanges();
    component.valueChanged.subscribe(value => updatedValue = value);

    minusButton.triggerEventHandler('click', null);
    expect(updatedValue).toBe(inputValue - 1);
  });
});
