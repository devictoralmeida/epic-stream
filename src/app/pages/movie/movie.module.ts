import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { ButtonModule } from '@coreui/angular';
import { MoviePlayerComponent } from './movie-player/movie-player.component';
import { AppRoutingModule } from '../../app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieComponent, MoviePlayerComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MoviesListComponent,
    AppRoutingModule,
    RouterModule,
    YouTubePlayerModule,
  ],
})
export class MovieModule {}
