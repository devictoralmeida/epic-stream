import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { IMoviesResponse } from '../../@types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  movies: Movie[] = []

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.fetchPopularMovies(1).subscribe({
      next: (res: IMoviesResponse) => {
        this.movies = res.results.map((movie: Movie) => {
          movie.poster_path = this.moviesService.getMoviePoster(
            movie.poster_path
          );
          movie.backdrop_path = this.moviesService.getMoviePoster(
            movie.backdrop_path
          );
          return movie;
        });
      },
    });
  }
}
