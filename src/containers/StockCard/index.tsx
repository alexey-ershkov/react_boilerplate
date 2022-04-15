import { Image, ImageFit, PersonaSize } from '@fluentui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../App/routes';
import { CardWrapper } from '../../components/CardWrapper';
import { GAP } from '../../constants/styles';
import { NumberInfo } from '../../pages/stocks/components/NumberInfo';
import { StyledAlignBottomRow, StyledRow } from '../../styled';
import { CardStockInfo } from '../../utils/stockInfoTypes';
import { CardHeader, NameText } from './styled';

export const StockCard = ({ symbol, name, logo, currentPrice, percentChange }: CardStockInfo) => {
    return (
        <CardWrapper>
            <Link to={ROUTES.stock}>
                <StyledRow>
                    <CardHeader>{symbol}</CardHeader>
                    <Image
                        imageFit={ImageFit.centerCover}
                        src={logo}
                        alt={`${name} logo`}
                        width={PersonaSize.size72}
                        height={PersonaSize.size72}
                    />
                </StyledRow>
                <StyledAlignBottomRow gap={GAP.xl}>
                    <NumberInfo currentPrice={currentPrice} percentChange={percentChange} />
                    <NameText>{name}</NameText>
                </StyledAlignBottomRow>
            </Link>
        </CardWrapper>
    );
};
