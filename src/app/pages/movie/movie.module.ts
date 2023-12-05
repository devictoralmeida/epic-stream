import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { ButtonModule } from '@coreui/angular';


@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MoviesListComponent
  ],
  exports: []
})
export class MovieModule { }
