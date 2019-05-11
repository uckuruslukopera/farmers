import { Component, OnInit, Input } from '@angular/core';
import { Promotion } from 'src/app/models/promotion.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() promotions: Promotion[];

  constructor() { }

  ngOnInit() {
  }

}
