import { Quote, Stock } from 'besthack_exchange_api_typings_and_utils';

export type CardStockInfo = Pick<
    Stock & Quote & { count: number },
    'symbol' | 'name' | 'logo' | 'currentPrice' | 'percentChange' | 'count'
>;
