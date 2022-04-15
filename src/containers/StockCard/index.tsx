import { Persona, PersonaSize } from '@fluentui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../App/routes';
import { CardWrapper } from '../../components/CardWrapper';
import { NumberInfo } from '../../pages/Stocks/components/NumberInfo';
import { CardStockInfo } from '../../utils/stockInfoTypes';
import { CardHeader, NameText, Row } from './styled';

export const StockCard = ({ symbol, name, logo, currentPrice, percentChange }: CardStockInfo) => {
    return (
        <CardWrapper>
            <Link to={`${ROUTES.stock}/${symbol}`}>
                <Row>
                    <CardHeader>{symbol}</CardHeader>
                    <Persona
                        imageUrl={logo}
                        size={PersonaSize.size72}
                        style={{ padding: '0', gap: '0' }}
                    />
                </Row>
                <Row style={{ alignItems: 'baseline' }}>
                    <NumberInfo currentPrice={currentPrice} percentChange={percentChange} />
                    <NameText>{name}</NameText>
                </Row>
            </Link>
        </CardWrapper>
    );
};
