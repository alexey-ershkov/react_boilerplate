import { Image, ImageFit } from '@fluentui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../App/routes';
import { NumberInfo } from '../../components/NumberInfo';
import { GAP } from '../../constants/styles';
import { StyledAlignBottomRow, StyledElemRight, StyledRow } from '../../styled';
import { CardStockInfo } from '../../utils/stockInfoTypes';
import { BalanceText, CardHeader, NameText } from './styled';

export const StockCard = ({
    symbol,
    name,
    logo,
    currentPrice,
    percentChange,
    count = 0,
}: CardStockInfo) => {
    return (
        <Link to={`${ROUTES.stock}/${symbol}`}>
            <StyledRow>
                <CardHeader>{symbol}</CardHeader>
                <Image
                    imageFit={ImageFit.centerCover}
                    src={logo}
                    alt={`${name} logo`}
                    width={72}
                    height={72}
                />
            </StyledRow>
            <StyledAlignBottomRow gap={GAP.xl}>
                <NumberInfo currentPrice={currentPrice} percentChange={percentChange} />
                <NameText>{name}</NameText>
            </StyledAlignBottomRow>
            {count > 0 ? (
                <StyledElemRight>
                    <BalanceText>
                        You have {count} stocks cost {(count * currentPrice).toFixed(2)} $
                    </BalanceText>
                </StyledElemRight>
            ) : null}
        </Link>
    );
};
