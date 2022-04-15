import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    AppResponse,
    AuthUserInfo,
    CreateUserInfo,
    Quote,
    Stock,
    StockCandleResponse,
    UserInfo,
} from 'besthack_exchange_api_typings_and_utils';

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
                url: '/user/login',
                method: 'POST',
                body: info,
            }),
        }),
        getUserStocks: builder.query<(Stock & Quote)[], void>({
            query: () => '/user/stocks',
        }),
        // stocks
        getAllStocks: builder.query<{ data: (Stock & Quote)[] }, void>({
            query: () => '/stock',
        }),
        stockBySymbol: builder.query<
            AppResponse<Stock & Quote & { count: number }>,
            { symbol: string }
        >({
            query: ({ symbol }) => `/stock/${symbol}`,
        }),
        stockCandles: builder.query<AppResponse<StockCandleResponse>, { symbol: string }>({
            query: ({ symbol }) => `/stock/candles?symbols=${symbol}`,
        }),
    }),
});

export const {
    useGetUserInfoQuery,
    useGetAllStocksQuery,
    useStockBySymbolQuery,
    useStockCandlesQuery,
    useRegisterMutation,
    useLoginMutation,
} = api;
