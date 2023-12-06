import { Observable } from 'rxjs';

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

import { CardModule } from '@coreui/angular';

import { IMoviesResponse } from '../../@types/types';
import { MoviesService } from '../../services/movies.service';
import { LoaderSpinnerComponent } from '../loader-spinner/loader-spinner.component';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  standalone: true,
  imports: [RouterModule, CardModule, CommonModule, LoaderSpinnerComponent],
})
export class MoviesListComponent implements OnInit {
  @Input() category: string;
  movies: Observable<IMoviesResponse>;
  popularMovies: Movie[];

  constructor(
    public moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.moviesService.fetchPopularMovies(3).subscribe({
      next: (res: IMoviesResponse) => {
        this.popularMovies = res.results;
        return;
      },
    });

    switch (this.category) {
      case 'popular':
        this.movies = this.moviesService.fetchPopularMovies(2);
        return;
      case 'available':
        this.movies = this.moviesService.fetchAvailableMovies();
        return;
      case 'upcoming':
        this.movies = this.moviesService.fetchUpcomingMovies();
        return;
      case 'top-rated':
        this.movies = this.moviesService.fetchTopRatedMovies();
        return;
      case 'recommended':
        this.route.params.subscribe((params: Params) => {
          this.movies = this.moviesService.fetchRecommendationsByMovieId(
            params['id']
          );
        });
        return;
    }
  }
}
