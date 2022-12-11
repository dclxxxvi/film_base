export interface IFilm {
    "adult": boolean,
    "belongs_to_collection": string[],
    "budget": string,
    "genres": string[],
    "homepage": number,
    "id": number,
    "imdb_id": number,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "production_companies": string[],
    "production_countries": string[],
    "release_date": Date,
    "revenue": number,
    "runtime": number,
    "spoken_languages": string[],
    "status": string,
    "tagline": string,
    "title": string,
    "vote_average": number,
    "vote_count": number
}

export interface IFilmsQuery {
    "adult"?: boolean,
    "budget_max"?: number,
    "budget_min"?: number,
    "genres"?: string[],
    "ids"?: number[],
    "imdb_id"?: number,
    "original_language"?: string,
    "page"?: number,
    "page_size"?: number,
    "popularity_max"?: number,
    "popularity_min"?: number,
    "release_date_max"?: Date,
    "release_date_min"?: Date,
    'revenue_max'?: number,
    "revenue_min"?: number,
    "runtime_max"?: number,
    "runtime_min"?: number,
    "search"?: string,
    "sort_field"?: string,
    "sort_order"?: string,
    "spoken_languages"?: string[],
    "status"?: string,
    "vote_average_max"?: number,
    "vote_average_min"?: number,
    "vote_count_max"?: number,
    "vote_count_min"?: number
}

export interface IFilmsResponse {
    data: IFilm[];
    data_size: number;
    ok: boolean;
}

