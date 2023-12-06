import { Component, Input } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-pages-list',
  templateUrl: './movies-pages-list.component.html',
  styleUrl: './movies-pages-list.component.scss',
})
export class MoviesPagesListComponent {
  @Input('moviesList') movies: Movie[] = [];

  constructor(private activeRoute: ActivatedRoute) {}
}
