import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  public movies: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.fetchPopularMovies(1).subscribe({
      next: (res: any) => {
        this.movies = res.results
        this.movies.forEach((movie: Movie) => {
          movie.poster_path = this.moviesService.getMoviePoster(movie.poster_path);
          movie.backdrop_path = this.moviesService.getMoviePoster(movie.backdrop_path);
        })
        return this.movies;
      },
    });
  }
}
