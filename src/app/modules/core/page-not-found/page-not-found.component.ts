import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/app-state.interface';
import { Store } from '@ngrx/store';
import { SetSidebarAction } from 'src/app/state/actions/sidebar.action';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new SetSidebarAction({title: 'Kategoriler' , showMenu: true}));

  }

}
