import { Injectable } from '@angular/core';
import { Movie, MovieDetails } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../credentials';
import { IMovieVideoResponse, IMoviesResponse } from '../@types/types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseURL: string = 'https://api.themoviedb.org/3';
  private posterBaseURL: string = 'https://image.tmdb.org/t/p/original';

  constructor(private http: HttpClient) {}

  fetchPopularMovies(page: number): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`
    );
  }

  fetchAvailableMovies(): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR`
    );
  }

  fetchUpcomingMovies(): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR`
    );
  }

  fetchTopRatedMovies(): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    );
  }

  fetchMoviesByQuery(query: string): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&include_adult=false`
    );
  }

  fetchMoviesByCategory(id: number): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/discover/movie?api_key=${API_KEY}&language=pt-BR&include_adult=false&sort_by=popularity.desc&with_genres=${id}`
    );
  }

  fetchRecommendationsByMovieId(id: string): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      `${this.baseURL}/movie/${id}/recommendations?api_key=${API_KEY}&language=pt-BR`
    );
  }

  fetchVideosByMovieId(id: number): Observable<IMovieVideoResponse> {
    return this.http.get<IMovieVideoResponse>(
      `${this.baseURL}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`
    );
  }

  getMovieById(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${this.baseURL}/movie/${+id}?api_key=${API_KEY}&language=pt-BR`
    );
  }

  getMoviePoster(path: string): string {
    return `${this.posterBaseURL}/${path}`;
  }
}
