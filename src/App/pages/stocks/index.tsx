import { decamelize } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';
import { useEffect } from 'react';

import { useGetAllStocksQuery, useRegisterMutation } from '../../../utils/api';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { ROUTES } from '../../routes';
import { HEADER_BUTTONS, HEADERS } from '../../texts';

const buttons = [
    {
        text: HEADER_BUTTONS.goLogin,
        link: ROUTES.login,
    },
];

export const CommonPage = () => {
    const { data } = useGetAllStocksQuery();
    const [register, response] = useRegisterMutation();

    console.log(data);
    console.log(response);

    useEffect(() => {
        register(
            decamelize({
                email: 'test@test.ru',
                firstName: 'Alex',
                lastName: 'Ershkov',
                password: 'password',
            }),
        );
    }, []);

    return (
        <Layout header={<Header pageName={HEADERS.main} buttons={buttons} />} left={<p>main</p>} />
    );
};
