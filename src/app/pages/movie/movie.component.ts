import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {
  public movie: MovieDetails

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.moviesService.getMovieById(+id).subscribe({
      next: (res: MovieDetails) => {
        this.movie = res
        return this.movie
      },
    });
  }
}
