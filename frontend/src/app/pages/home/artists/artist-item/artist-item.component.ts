import { Component, Input } from '@angular/core';
import { Artist } from '../../../../models/artist.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.less']
})
export class ArtistItemComponent  {
  @Input() artist!: Artist;
  env = environment;

  constructor() { }

  getAlbums() {
    console.log(this.artist.id);
  }
}
