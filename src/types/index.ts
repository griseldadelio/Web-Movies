type Genre = {
    id: number,
    name: string
}
type ProductionCompanie = {
    id: string,
    logo_path: string | null,
    name: string,
    origin_country: string
}

type ProductionCountrie = {
    iso_3166_1: string,
    name: string,
}

type SpokenLanguage = {
    english_name: string,
    iso_639_1: string,
    name: string,
}

export type MovieType = {
    production_companies: ProductionCompanie[],
    genres: Genre[],
    production_countries: ProductionCountrie[],
    id: number,
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string | null,
    budget: number,
    genre_ids: [],
    homepage: string,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: string,
    vote_count: number,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguage[],
    status: string,
    tagline: string,
    query: string,

}