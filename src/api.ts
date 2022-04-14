import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Stock, UserInfo } from 'besthack_exchange_api_typings_and_utils';
import { AuthUserInfo, CreateUserInfo } from 'besthack_exchange_api_typings_and_utils/models/User';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['UserStocks', 'User'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL, credentials: 'include' }),
    endpoints: (builder) => ({
        // user
        getUserInfo: builder.query<UserInfo, void>({
            query: () => '/user',
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
        // stocks
        getAllStocks: builder.query<Stock[], void>({
            query: () => '/stock',
        }),
    }),
});

export const { useGetUserInfoQuery, useGetAllStocksQuery, useRegisterMutation, useLoginMutation } =
    api;
