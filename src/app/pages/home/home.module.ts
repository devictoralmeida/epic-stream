import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CarouselModule],
  exports: [HomeComponent],
})
export class HomeModule {}
