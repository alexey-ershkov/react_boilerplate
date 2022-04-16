import { camelize } from 'besthack_exchange_api_typings_and_utils';
import React, { useMemo } from 'react';

import { useGetAllStocksQuery, useGetUserInfoQuery } from '../../api';
import { ROUTES } from '../../App/routes';
import { CardUI } from '../../components/CardWrapper';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { HEADER_BUTTONS, HEADERS } from '../../constants/texts';
import { StockCard } from '../../containers/StockCard';
import { CardStockInfo } from '../../utils/stockInfoTypes';
import { CardsWrapper, CardWrapper } from './styled';

export const CommonPage = () => {
    const { data, isSuccess } = useGetAllStocksQuery();
    const stocks: CardStockInfo[] = useMemo(() => {
        if (isSuccess && data) {
            return data.data.map((gotStock) => camelize(gotStock) as CardStockInfo);
        }
        return [];
    }, [data, isSuccess]);

    const user = useGetUserInfoQuery();
    const buttons = useMemo(() => {
        if (user.isError) {
            return [
                {
                    text: HEADER_BUTTONS.goLogin,
                    link: ROUTES.login,
                },
            ];
        }
        if (user.isSuccess) {
            return [
                {
                    text: HEADER_BUTTONS.goProfile,
                    link: ROUTES.profile,
                },
            ];
        }
        return [];
    }, [user]);

    return (
        <Layout
            header={<Header pageName={HEADERS.main} buttons={buttons} />}
            left={
                isSuccess ? (
                    <CardsWrapper>
                        {stocks.map((stock, idx) => (
                            <CardWrapper key={idx}>
                                <CardUI>
                                    <StockCard {...stock} />
                                </CardUI>
                            </CardWrapper>
                        ))}
                    </CardsWrapper>
                ) : null
            }
        />
    );
};
