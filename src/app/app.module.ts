import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';

import { ButtonModule } from '@coreui/angular';
import { FooterModule } from '@coreui/angular';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { CarouselModule } from '@coreui/angular';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesModule } from './pages/movies/movies.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieModule } from './pages/movie/movie.module';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt-BR');

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
    CarouselModule,
    HomeModule,
    CarouselModule,
    MoviesModule,
    MovieModule,
    MoviesListComponent,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
