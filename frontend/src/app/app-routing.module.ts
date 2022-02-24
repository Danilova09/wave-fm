import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './pages/home/artists/artists.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/home/albums/albums.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', component: ArtistsComponent},
      {path: 'albums', component: AlbumsComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
