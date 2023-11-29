import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private movies: Movie[]

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.fetchPopularMovies(2).subscribe({
      next: (res: any) => {
        this.movies = res.results
        return this.movies
      },
    });
  }
}
