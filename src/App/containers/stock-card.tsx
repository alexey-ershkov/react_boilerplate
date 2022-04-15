import { Persona, PersonaSize } from '@fluentui/react';
import * as React from 'react';
import styled from 'styled-components';

import { CardStockInfo } from '../../utils/stock-info-types';
import { CardWrapper } from '../components/card-wrapper';
import { NumberInfo } from '../pages/stocks/components/number-info';
import { FONTS, GAP } from '../styles';
import { Link } from 'react-router-dom';
import {ROUTES} from "../routes";

export const StockCard = ({ symbol, name, logo, currentPrice, percentChange }: CardStockInfo) => {
    const Row = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: ${GAP.s};
        gap: ${GAP.l};
    `;
    const CardHeader = styled.h4`
        ${FONTS.localHeaderBold}
    `;

    const NameText = styled.p`
        ${FONTS.smallText}
    `;

    return (
        <Link to={ROUTES.stock}>
            <CardWrapper>
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
            </CardWrapper>
        </Link>
    );
};
