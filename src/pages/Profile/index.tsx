import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUserInfoQuery } from '../../api';
import { ROUTES } from '../../App/routes';
import { CardWrapper } from '../../components/CardWrapper';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { HEADER_BUTTONS, HEADERS } from '../../constants/texts';

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
