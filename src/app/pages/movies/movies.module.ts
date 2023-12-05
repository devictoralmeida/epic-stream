import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ButtonModule, CardModule, CarouselModule } from '@coreui/angular';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { MoviesPagesListComponent } from './movies-pages-list/movies-pages-list.component';

@NgModule({
  declarations: [MoviesComponent, MoviesPagesListComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    CardModule,
  ],
})
export class MoviesModule {}
