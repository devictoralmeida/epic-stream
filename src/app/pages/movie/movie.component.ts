import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetails } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit {
  public movie: MovieDetails;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.moviesService.getMovieById(parseInt(params['id'])).subscribe({
        next: (res: MovieDetails) => {
          this.movie = res;
          this.movie.backdrop_path = this.moviesService.getMoviePoster(
            this.movie.backdrop_path
          );
          return this.movie;
        },
      });
    });
  }

  getPontuation(): number {
    return Math.round(this.movie.vote_average)
  }

  getStars(): number[] {
    return new Array(Math.round(this.movie.vote_average)).fill(0);
  }

  getEmptyStars(): number[] {
    return new Array(Math.round(10 - this.movie.vote_average)).fill(0);
  }

  showVideo(): void {
    const videoPlayer = document.getElementById('player')
    videoPlayer!.classList.add('player-full')
  }
}
