import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { ButtonModule } from '@coreui/angular';

import { MovieComponent } from './movie.component';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { AppRoutingModule } from '../../app-routing.module';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [MovieComponent, MoviePlayerComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MoviesListComponent,
    AppRoutingModule,
    RouterModule,
    YouTubePlayerModule,
    LoaderSpinnerComponent
  ],
})
export class MovieModule {}
