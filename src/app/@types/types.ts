import { Movie } from "../models/movie.model";

export type TGenre = {
  id: number;
  name: string;
}

export type TProductionCompany = {
  logo_path: string;
  name: string;
}

export interface IMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
