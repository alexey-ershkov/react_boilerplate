// import { createApi } from '@reduxjs/toolkit/query';

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Stock, UserInfo } from 'besthack_exchange_api_typings_and_utils';
import { AuthUserInfo, CreateUserInfo } from 'besthack_exchange_api_typings_and_utils/models/User';
import * as url from 'url';

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserInfo, void>({
            query: () => '/',
        }),
        getAllStocks: builder.query<Stock[], void>({
            query: () => '/stock',
        }),
        register: builder.mutation<UserInfo, CreateUserInfo>({
            query: (args) => ({
                url: '/user/register',
                method: 'POST',
                body: args,
            }),
        }),
        login: builder.mutation<UserInfo, AuthUserInfo>({
            query: (info) => ({
                url: '/auth',
                method: 'POST',
                body: info,
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserInfoQuery, useGetAllStocksQuery, useRegisterMutation, useLoginMutation } =
    api;
