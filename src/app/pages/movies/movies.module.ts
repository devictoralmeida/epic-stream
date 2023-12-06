import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { CardModule, CarouselModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { MoviesPagesListComponent } from './movies-pages-list/movies-pages-list.component';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [MoviesComponent, MoviesPagesListComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    CardModule,
    LoaderSpinnerComponent
  ],
})
export class MoviesModule {}
