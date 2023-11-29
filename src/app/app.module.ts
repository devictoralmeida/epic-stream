import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from '@coreui/angular';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { MovieModule } from './pages/movie/movie.module';
import { MoviesModule } from './pages/movies/movies.module';
import { FooterModule } from './components/footer/footer.module';
import { CarouselModule } from '@coreui/angular';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, MovieCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    HeaderModule,
    FooterModule,
    MovieModule,
    MoviesModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
