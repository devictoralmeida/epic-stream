import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IMoviesResponse } from '../../@types/types';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    public moviesService: MoviesService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next: (params: Params) => {
        if (params['query']) {
          this.moviesService.fetchMoviesByQuery(params['query']).subscribe({
            next: (res: IMoviesResponse) => {
              const moviesWithPoster: Movie[] = res.results.filter(
                (movie: Movie) => movie.backdrop_path !== null
              );

              moviesWithPoster.forEach((movie: Movie) => {
                movie.backdrop_path = this.moviesService.getMoviePoster(
                  movie.backdrop_path
                );
              });

              this.movies = moviesWithPoster;
            },
          });
        } else {
          this.moviesService.fetchMoviesByCategory(params['category']).subscribe({
            next: (res: IMoviesResponse) => {
              const moviesWithPoster: Movie[] = res.results.filter(
                (movie: Movie) => movie.backdrop_path !== null
              );

              moviesWithPoster.forEach((movie: Movie) => {
                movie.backdrop_path = this.moviesService.getMoviePoster(
                  movie.backdrop_path
                );
              });

              this.movies = moviesWithPoster;
            },
          });
        }
      },
    });
  }
}
