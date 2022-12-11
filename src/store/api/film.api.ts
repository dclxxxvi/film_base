import { baseApi } from "./base.api";
import { IFilmsQuery, IFilmsResponse } from "../models/IFilm";

export const filmsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFilms: builder.query<IFilmsResponse, IFilmsQuery>({
            query: (filmsQuery) => ({
                url: 'list',
                method: 'POST',
                body: filmsQuery,
            }),
            providesTags: ['Films'],
        }),
    }),
});

export const {
    useGetFilmsQuery
} = filmsApi;