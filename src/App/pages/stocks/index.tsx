import { camelize } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';

import { useGetAllStocksQuery, useGetUserInfoQuery } from '../../../api';
import { CardStockInfo } from '../../../utils/stock-info-types';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { StockCard } from '../../containers/stock-card';
import { ROUTES } from '../../routes';
import { GAP, MOBILE_WIDTH } from '../../styles';
import { HEADER_BUTTONS, HEADERS } from '../../texts';

export const CommonPage = () => {
    const { data, isSuccess } = useGetAllStocksQuery();
    const stocks: CardStockInfo[] = useMemo(() => {
        if (isSuccess && data) {
            return data.data.map((gotStock) => camelize(gotStock));
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

    const CardsWrapper = styled.div`
        width: 100%;
        display: flex;

        @media (max-width: ${MOBILE_WIDTH}) {
            flex-direction: column;
            gap: ${GAP.l};
        }
        @media (min-width: ${MOBILE_WIDTH}) {
            flex-wrap: wrap;
            gap: 2%;
            row-gap: ${GAP.l};
        }
    `;

    return (
        <Layout
            header={<Header pageName={HEADERS.main} buttons={buttons} />}
            left={
                isSuccess ? (
                    <CardsWrapper>
                        {stocks.map((stock, idx) => (
                            <StockCard {...stock} key={idx} />
                        ))}
                    </CardsWrapper>
                ) : null
            }
        />
    );
};
