import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/app/models/media.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() media: Media[];

  constructor() { }

  ngOnInit() {
  }

}
