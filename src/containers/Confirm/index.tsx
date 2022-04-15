import { Callout, DefaultButton, Text } from '@fluentui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAddStockMutation, useDeleteStockMutation } from '../../api';
import { ROUTES } from '../../App/routes';
import { getUserId } from '../../store/user/selectors';
import { Padding } from './styled';

interface ConfirmProps {
    symbol: string;
    question: string;
    buttonId: string;
    toggleIsCalloutVisible: never;

    callback: 'buy' | 'ceil' | 'getMoney';
}

export const Confirm = ({
    symbol,
    question,
    buttonId,
    toggleIsCalloutVisible,
    callback,
}: ConfirmProps) => {
    const [buy, buyResult] = useAddStockMutation();
    const [seil, seilResult] = useDeleteStockMutation();

    const navigate = useNavigate();
    // const [seil, seilResult] = useDeleteStockMutation();

    useEffect(() => {
        if (buyResult.isSuccess || seilResult.isSuccess) {
            if (symbol !== 'no') {
                navigate(`${ROUTES.stock}/${symbol}`);
            } else {
                navigate(ROUTES.profile);
            }
        }
    }, [buyResult, seilResult]);

    // callback === 'buy';
    //
    // switch (callback)
    //
    // const action =

    const action = callback === 'buy' ? buy : seil;
    const userId = useSelector(getUserId);

    return (
        <Callout
            gapSpace={0}
            target={`#${buttonId}`}
            onDismiss={toggleIsCalloutVisible}
            setInitialFocus
        >
            <Padding>
                <Text block variant="xLarge">
                    {question}
                </Text>
                <Text block variant="small">
                    Are you shure?
                </Text>
                <DefaultButton
                    onClick={() =>
                        action({
                            userId,
                            stockSymbol: symbol,
                            count: 1,
                        })
                    }
                >
                    Confirm
                </DefaultButton>
            </Padding>
        </Callout>
    );
};
