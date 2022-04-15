import { Persona, PersonaSize } from '@fluentui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../App/routes';
import { CardWrapper } from '../../components/CardWrapper';
import { NumberInfo } from '../../pages/stocks/components/NumberInfo';
import { StyledBaselineRow, StyledRow } from '../../styled';
import { CardStockInfo } from '../../utils/stockInfoTypes';
import { CardHeader, NameText } from './styled';

export const StockCard = ({ symbol, name, logo, currentPrice, percentChange }: CardStockInfo) => {
    return (
        <CardWrapper>
            <Link to={`${ROUTES.stock}/${symbol}`}>
                <StyledRow>
                    <CardHeader>{symbol}</CardHeader>
                    <Persona
                        imageUrl={logo}
                        size={PersonaSize.size72}
                        style={{ padding: '0', gap: '0' }}
                    />
                </StyledRow>
                <StyledBaselineRow>
                    <NumberInfo currentPrice={currentPrice} percentChange={percentChange} />
                    <NameText>{name}</NameText>
                </StyledBaselineRow>
            </Link>
        </CardWrapper>
    );
};
