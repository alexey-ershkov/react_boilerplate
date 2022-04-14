// import { createApi } from '@reduxjs/toolkit/query';

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserInfo } from 'besthack_exchange_api_typings_and_utils';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        login: builder.query<UserInfo, void>({
            query: () => '/',
        }),
        getUserInfo: builder.query<UserInfo, void>({
            query: () => '/',
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserInfoQuery } = api;
