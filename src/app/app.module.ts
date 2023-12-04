import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from '@coreui/angular';
import { FooterModule } from '@coreui/angular';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { MovieModule } from './pages/movie/movie.module';
import { MoviesModule } from './pages/movies/movies.module';
import { CarouselModule } from '@coreui/angular';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [AppComponent, FooterComponent],
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
    HomeModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
