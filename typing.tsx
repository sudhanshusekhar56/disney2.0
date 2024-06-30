export type Movies = {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export type SearchResult = {
    page:          number;
    results:       Movies[];
    total_pages:   number;
    total_results: number;
}

export type Genre = {
      id: number;
      name: string;
  };

  export type Genres = {
      genres: Genre[];
  };