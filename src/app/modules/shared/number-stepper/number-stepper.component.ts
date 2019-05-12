import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-stepper',
  templateUrl: './number-stepper.component.html',
  styleUrls: ['./number-stepper.component.scss']
})
export class NumberStepperComponent implements OnInit {

  @Input() value = 0;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrement(e) {
    if(this.value > 1) {
      this.value -= 1;
      this.valueChanged.emit(this.value);
    }
  }

  increment(e) {
    this.value += 1;
    this.valueChanged.emit(this.value);
  }
}
