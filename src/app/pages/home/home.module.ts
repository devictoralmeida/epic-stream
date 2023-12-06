import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ButtonModule, CardModule, CarouselModule } from '@coreui/angular';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    MoviesListComponent,
    LoaderSpinnerComponent
  ],
  exports: [],
})
export class HomeModule {}
