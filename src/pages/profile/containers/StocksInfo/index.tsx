import { camelize } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';
import { useMemo } from 'react';

import { useGetUserStocksQuery } from '../../../../api';
import { CardUI } from '../../../../components/CardWrapper';
import { StockCard } from '../../../../containers/StockCard';
import { CardStockInfo } from '../../../../utils/stockInfoTypes';
import { ErrorMsg } from './styled';

export const UserStocks = () => {
    const { data, isSuccess } = useGetUserStocksQuery();

    const stocks: CardStockInfo[] = useMemo(() => {
        if (isSuccess && data) {
            return data.data.map((gotStock) => camelize(gotStock));
        }
        return [];
    }, [data, isSuccess]);

    if (isSuccess) {
        return (
            <>
                {stocks.map((stock, idx) => (
                    <CardUI>
                        <StockCard {...stock} key={idx} />
                    </CardUI>
                ))}
            </>
        );
    }
    return <ErrorMsg>Акции загружаются</ErrorMsg>;
};
