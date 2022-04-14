import * as React from 'react';

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
    return (
        <Layout header={<Header pageName={HEADERS.main} buttons={buttons} />} left={<p>main</p>} />
    );
};
