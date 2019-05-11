import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  @Input() menu: MenuItem[];

  constructor() { }

  ngOnInit() {

  }
}
