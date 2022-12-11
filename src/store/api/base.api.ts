import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Films'],
    endpoints: () => ({})
});