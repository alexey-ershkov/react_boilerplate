import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    AppResponse,
    AuthUserInfo,
    CreateUserInfo,
    Quote,
    Stock,
    UserInfo,
} from 'besthack_exchange_api_typings_and_utils';
import { UserStock } from 'besthack_exchange_api_typings_and_utils/models/UserStock';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['UserStocks', 'User'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL, credentials: 'include' }),
    endpoints: (builder) => ({
        // user
        getUserInfo: builder.query<{ data: UserInfo }, void>({
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
                url: '/user/login',
                method: 'POST',
                body: info,
            }),
        }),
        // user stocks
        getUserStocks: builder.query<AppResponse<[Stock & Quote & { count: number }]>, void>({
            query: () => '/user/stocks',
        }),
        stockBySymbol: builder.query<
            AppResponse<Stock & Quote & { count: number }>,
            { symbol: string }
        >({
            query: ({ symbol }) => `/stock/${symbol}`,
        }),
        addStock: builder.mutation<unknown, UserStock>({
            query: (symbol) => ({
                url: 'user/stocks',
                method: 'POST',
                body: symbol,
            }),
        }),
        deleteStock: builder.mutation<unknown, UserStock>({
            query: (symbol) => ({
                url: 'user/stocks',
                method: 'DELETE',
                body: symbol,
            }),
        }),
        // all stocks
        getAllStocks: builder.query<AppResponse<[Stock & Quote]>, void>({
            query: () => '/stock',
        }),
    }),
});

export const {
    useGetUserInfoQuery,
    useGetAllStocksQuery,
    useRegisterMutation,
    useLoginMutation,
    useGetUserStocksQuery,
    useAddStockMutation,
    useStockBySymbolQuery,
} = api;
