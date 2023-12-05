import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { ButtonModule } from '@coreui/angular';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [MovieComponent, MoviePlayerComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MoviesListComponent,
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    YouTubePlayerModule
  ],
  exports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    YouTubePlayerModule
  ],
})
export class MovieModule {}
