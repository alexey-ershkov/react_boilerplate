import { camelize } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserInfoQuery } from '../../../api';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { ROUTES } from '../../routes';
import { HEADER_BUTTONS, HEADERS } from '../../texts';
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
            right={isSuccess ? <UserStocks id={data.data.id} /> : null}
        />
    );
};
