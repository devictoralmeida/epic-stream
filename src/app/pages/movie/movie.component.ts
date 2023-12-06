import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetails } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { IMovieVideoResponse } from '../../@types/types';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit {
  public movie: MovieDetails;
  public movieVideoId: string = '';

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']);

      this.moviesService.getMovieById(id).subscribe({
        next: (res: MovieDetails) => {
          this.movie = res;
          this.movie.backdrop_path = this.moviesService.getMoviePoster(
            this.movie.backdrop_path
          );
          return this.movie;
        },
      });

      this.moviesService.fetchVideosByMovieId(id).subscribe({
        next: (res: IMovieVideoResponse) => {
          if (res.results.length > 0) {
            this.movieVideoId = res.results[0].key;
          } else {
            this.movieVideoId = '';
          }
          return this.movieVideoId;
        },
      });
    });
  }

  getPontuation(): number {
    return Math.round(this.movie.vote_average);
  }

  getStars(): number[] {
    return new Array(Math.round(this.movie.vote_average)).fill(0);
  }

  getEmptyStars(): number[] {
    return new Array(Math.round(10 - this.movie.vote_average)).fill(0);
  }

  showVideo(): void {
    const videoPlayer = document.getElementById('player');
    videoPlayer?.classList.add('player-full');
  }

  previousPage(): void {
    document.body.scrollTop = 0;
    this.location.back();
  }
}
