import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ButtonModule, CardModule, CarouselModule } from '@coreui/angular';
import { MoviesListComponent } from '../../components/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    MoviesListComponent
  ],
  exports: [],
})
export class HomeModule {}
