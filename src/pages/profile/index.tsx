import { camelize } from 'besthack_exchange_api_typings_and_utils';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserInfoQuery } from '../../api';
import { ROUTES } from '../../App/routes';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { HEADER_BUTTONS, HEADERS } from '../../constants/texts';
import { UserStocks } from './containers/StocksInfo';
import { UserInfo } from './containers/UserInfo';

const buttons = [
    {
        text: HEADER_BUTTONS.goMain,
        link: ROUTES.main,
    },
];

export const ProfilePage = () => {
    const { data, isSuccess, isError } = useGetUserInfoQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            navigate(ROUTES.main);
        }
    }, [isError]);

    return (
        <Layout
            header={<Header pageName={HEADERS.profile} buttons={buttons} />}
            left={isSuccess ? <UserInfo {...camelize(data.data)} /> : null}
            right={isSuccess ? <UserStocks /> : null}
        />
    );
};
