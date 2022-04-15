import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    AppResponse,
    AuthUserInfo,
    CreateUserInfo,
    Quote,
    Stock,
    StockCandleQuery,
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
        stockCandles: builder.query<AppResponse<StockCandleResponse>, StockCandleQuery>({
            query: ({ symbols, resolution, timeFrom, timeTo }) => {
                let params = `symbols=${symbols}`;

                if (resolution) {
                    params += `&resolution=${resolution}`;
                }

                if (timeFrom) {
                    params += `&timeFrom=${timeFrom}`;
                }

                if (timeTo) {
                    params += `&timeTo=${timeTo}`;
                }

                return `/stock/candles?${params}`;
            },
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
