import { TGenre, TProductionCompany } from "../@types/types";

export class Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export class MovieDetails extends Movie {
  budget: number;
  genres: TGenre[];
  homepage: string;
  production_companies: TProductionCompany[]
  revenue: number;
  runtime: number;
  status: string;
}
