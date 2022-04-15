import { Icon } from '@fluentui/react';
import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTS } from '../../../../constants/styles';
import { CardStockInfo } from '../../../../utils/stockInfoTypes';
import { Cost, SmallWrapper, Wrapper } from './styled';

type NumberInfoProps = Pick<CardStockInfo, 'currentPrice' | 'percentChange'>;

export const NumberInfo = ({ currentPrice, percentChange }: NumberInfoProps) => {
    const iconName = percentChange > 0 ? 'SortUp' : 'SortDown';
    const Num = styled.p`
        ${FONTS.text}
    `;
    const numStyle = {
        color: percentChange > 0 ? COLORS.GREEN : COLORS.RED,
    };

    const percentage = (
        <SmallWrapper>
            <Num style={numStyle}>
                <Icon iconName={iconName} />
                {percentChange.toFixed(2)}%
            </Num>
        </SmallWrapper>
    );

    return (
        <Wrapper>
            <Cost>{currentPrice} $</Cost>
            {percentage}
        </Wrapper>
    );
};
