import { PrimaryButton } from '@fluentui/react';
import { AppResponse, UserInfo } from 'besthack_exchange_api_typings_and_utils';
import React from 'react';

import { CardUI } from '../../../components/CardWrapper';
import { StyledRow } from '../../../styled';
import { Col, LocalHeader, SmallText, SmallTextRight } from '../styled';
import { RightCol, VerticalPair } from './styled';

interface RightPanelProps {
    user: AppResponse<UserInfo>;
    isSuccess: boolean;
    isError: boolean;

    symbol: string;
    stockAmount: number;
    stockCost: number;
}

const BUTTON_TEXT = {
    buy: 'Buy',
    ceil: 'Ceil',
};

export const RightPanel = ({
    user,
    isError,
    isSuccess,
    stockAmount,
    stockCost,
    symbol,
}: RightPanelProps) => {
    const headerText = isError ? 'Log in to trade' : 'In your portfolio';
    const infoBlock =
        isSuccess && user.data ? (
            <StyledRow>
                <VerticalPair>
                    <LocalHeader>{stockAmount} stocks</LocalHeader>
                    <SmallText>You have</SmallText>
                </VerticalPair>
                <VerticalPair>
                    <LocalHeader>{stockCost} $</LocalHeader>
                    <SmallTextRight>cost</SmallTextRight>
                </VerticalPair>
            </StyledRow>
        ) : null;
    const buttonsDisabled = isError
        ? {
              buy: true,
              ceil: true,
          }
        : {
              buy: false,
              ceil: true,
          };
    if (isSuccess && stockAmount > 0) {
        buttonsDisabled.ceil = false;
    }

    return (
        <RightCol>
            <CardUI>
                <Col>
                    <LocalHeader>{headerText}</LocalHeader>
                    {infoBlock}
                    <PrimaryButton
                        disabled={buttonsDisabled.buy}
                    >{`${BUTTON_TEXT.buy} ${symbol}`}</PrimaryButton>
                    <PrimaryButton
                        disabled={buttonsDisabled.ceil}
                    >{`${BUTTON_TEXT.ceil} ${symbol}`}</PrimaryButton>
                </Col>
            </CardUI>
        </RightCol>
    );
};
