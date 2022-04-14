import * as React from 'react';

import { useGetUserInfoQuery } from '../../../utils/api';
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
    const { data } = useGetUserInfoQuery();
    return (
        <Layout
            header={<Header pageName={HEADERS.profile} buttons={buttons} />}
            left={<CardWrapper>profile</CardWrapper>}
            right={<CardWrapper>cards {data}</CardWrapper>}
        />
    );
};
