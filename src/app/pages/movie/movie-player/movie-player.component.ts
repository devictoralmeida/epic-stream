import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { MovieVideo } from '../../../models/movieVideo.model';
import { IMovieVideoResponse } from '../../../@types/types';

@Component({
  selector: 'app-movie-player',
  template:
    '<youtube-player [videoId]="this.movie!.key" id="player" [width]="300"  placeholderImageQuality="high"></youtube-player>',
  styleUrl: './movie-player.component.scss',
})
export class MoviePlayerComponent implements OnInit {
  @Input() movieId: number;
  @Input() videoId: string;

  private apiLoaded = false;
  movie: MovieVideo;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.moviesService.fetchVideosByMovieId(this.movieId).subscribe({
      next: (res: IMovieVideoResponse) => {
        this.movie = res.results[0];
      },
    });
  }
}
