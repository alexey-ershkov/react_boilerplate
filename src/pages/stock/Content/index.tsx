import { Image, ImageFit, Link as UILink } from '@fluentui/react';
import { Quote, Stock } from 'besthack_exchange_api_typings_and_utils';
import React from 'react';

import { CardUI } from '../../../components/CardWrapper';
import { NumberInfo } from '../../../components/NumberInfo';
import { SingleStock } from '../../singleStock';
import { Col, LocalHeader, Row } from '../styled';
import { LeftCol, NextLogoCol } from './styled';

interface ContentProps {
    stock: Stock & Quote;
}

export const Content = ({ stock }: ContentProps) => {
    const { logo, name, currentPrice, percentChange, website } = stock;
    return (
        <LeftCol>
            <CardUI>
                <Col>
                    <Row>
                        <Image
                            imageFit={ImageFit.centerCover}
                            src={logo}
                            alt={`${name} logo`}
                            width={120}
                            height={120}
                        />
                        <NextLogoCol>
                            <LocalHeader>{name}</LocalHeader>
                            <NumberInfo currentPrice={currentPrice} percentChange={percentChange} />
                        </NextLogoCol>
                    </Row>
                    <UILink href={website} target="_blank">
                        Website
                    </UILink>
                    <SingleStock />
                </Col>
            </CardUI>
        </LeftCol>
    );
};
