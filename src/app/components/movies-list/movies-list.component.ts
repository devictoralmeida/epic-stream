import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesResponse } from '../../@types/types';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { CardModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  standalone: true,
  imports: [RouterModule, CardModule, CommonModule],
})
export class MoviesListComponent implements OnInit {
  @Input() category: string;
  @Input() movieId: number;
  movies: Observable<IMoviesResponse>;

  constructor(public moviesService: MoviesService) {}

  ngOnInit(): void {
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
        this.movies = this.moviesService.fetchRecommendationsByMovieId(
          this.movieId
        );
        return;
    }
  }
}
