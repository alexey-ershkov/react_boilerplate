import { Icon } from '@fluentui/react';
import * as React from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';

import { CardStockInfo } from '../../../../utils/stock-info-types';
import { COLORS, FONTS, GAP } from '../../../styles';

type NumberInfoProps = Pick<CardStockInfo, 'currentPrice' | 'percentChange'>;

export const NumberInfo = ({ currentPrice, percentChange }: NumberInfoProps) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        gap: ${GAP.s};
        min-width: fit-content;
    `;

    const Cost = styled.p`
        ${FONTS.text}
    `;

    const percentage = useMemo(() => {
        const iconName = percentChange > 0 ? 'SortUp' : 'SortDown';
        const Num = styled.p`
            ${FONTS.text}
        `;
        const numStyle = {
            color: percentChange > 0 ? COLORS.GREEN : COLORS.RED,
        };

        const SmallWrapper = styled.div`
            display: flex;
            flex-direction: row;
            align-items: baseline;
        `;
        return (
            <SmallWrapper>
                <Num style={numStyle}>
                    <Icon iconName={iconName} />
                    {percentChange.toFixed(2)}%
                </Num>
            </SmallWrapper>
        );
    }, [percentChange]);

    return (
        <Wrapper>
            <Cost>{currentPrice} $</Cost>
            {percentage}
        </Wrapper>
    );
};
