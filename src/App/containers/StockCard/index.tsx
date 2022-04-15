import { Persona, PersonaSize } from '@fluentui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardStockInfo } from '../../../utils/stock-info-types';
import { CardWrapper } from '../../components/card-wrapper';
import { NumberInfo } from '../../pages/stocks/components/number-info';
import { ROUTES } from '../../routes';
import { CardHeader, FirstRow, NameText, SecondRow } from './styled';

export const Index = ({ symbol, name, logo, currentPrice, percentChange }: CardStockInfo) => {
    return (
        <CardWrapper>
            <Link to={ROUTES.stock}>
                <FirstRow>
                    <CardHeader>{symbol}</CardHeader>
                    <Persona
                        imageUrl={logo}
                        size={PersonaSize.size72}
                        style={{ padding: '0', gap: '0' }}
                    />
                </FirstRow>
                <SecondRow>
                    <NumberInfo currentPrice={currentPrice} percentChange={percentChange} />
                    <NameText>{name}</NameText>
                </SecondRow>
            </Link>
        </CardWrapper>
    );
};
