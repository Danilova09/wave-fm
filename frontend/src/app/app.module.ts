import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ArtistsComponent } from './pages/home/artists/artists.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/home/albums/albums.component';
import { ArtistItemComponent } from './pages/home/artists/artist-item/artist-item.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { artistsReducer } from './store/artists.reducer';
import { ArtistsEffects } from './store/artists.effects';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    AlbumsComponent,
    ArtistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HttpClientModule,
    NzCardModule,
    NzAvatarModule,
    NzGridModule,
    StoreModule.forRoot({
      artists: artistsReducer,
    }, {}),
    EffectsModule.forRoot([ArtistsEffects]),
    NzSpinModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
