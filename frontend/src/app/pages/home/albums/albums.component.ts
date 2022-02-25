import { Component, OnInit } from '@angular/core';
import { AppAlbumsState } from '../../../store/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from '../../../models/album.model';
import { fetchAlbumsRequest } from '../../../store/albums.actions';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})
export class AlbumsComponent implements OnInit {
  albums: Observable<Album[]>;
  loading: Observable<boolean>;
  error: Observable<null | string>;

  constructor(private store: Store<AppAlbumsState>) {
    this.albums = store.select(state => state.albums.albums);
    console.log(this.albums);
    this.loading = store.select(state => state.albums.fetchLoading);
    this.error = store.select(state => state.albums.fetchError);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchAlbumsRequest());
  }
}
