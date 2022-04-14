import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserInfoQuery } from '../../../api';
import { CardWrapper } from '../../components/card-wrapper';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { ROUTES } from '../../routes';
import { HEADER_BUTTONS, HEADERS } from '../../texts';

const buttons = [
    {
        text: HEADER_BUTTONS.goMain,
        link: ROUTES.main,
    },
];

export const ProfilePage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, isSuccess, isError } = useGetUserInfoQuery();
    const navigate = useNavigate();

    if (isError) {
        navigate(ROUTES.main);
    }

    return (
        <Layout
            header={<Header pageName={HEADERS.profile} buttons={buttons} />}
            left={<CardWrapper>profile</CardWrapper>}
            right={<CardWrapper>cards</CardWrapper>}
        />
    );
};
