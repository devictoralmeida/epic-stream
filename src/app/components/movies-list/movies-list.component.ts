import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesResponse } from '../../@types/types';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {
  @Input() category: string
  movies: Observable<IMoviesResponse>

  constructor(public moviesService: MoviesService) {}

  ngOnInit(): void {
    switch(this.category) {
      case 'popular':
        this.movies = this.moviesService.fetchPopularMovies(2)
        return
      case 'available':
        this.movies = this.moviesService.fetchAvailableMovies()
        return
      case 'upcoming':
        this.movies = this.moviesService.fetchUpcomingMovies()
        return
      case 'top-rated':
        this.movies = this.moviesService.fetchTopRatedMovies()
        return
      default:
        this.movies = this.moviesService.fetchPopularMovies(2)
        return
    }
  }
}
