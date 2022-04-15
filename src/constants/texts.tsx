import React from 'react';
import styled from 'styled-components';

import { FONTS, HEADER_GRADIENT, MOBILE_WIDTH } from './styles';

export const HEADER_BUTTONS = {
    goLogin: 'Create your portfolio',
    goProfile: 'My stock portfolio',
    goMain: 'All available stocks',
};

const Header = styled.h1`
    ${FONTS.header};
    @media (max-width: ${MOBILE_WIDTH}) {
        ${FONTS.mobileHeader}
    }
`;
const Blue = styled.span`
    ${HEADER_GRADIENT}
`;

export const HEADERS = {
    profile: (
        <Header>
            You <Blue>stock</Blue> portfolio
        </Header>
    ),
    main: (
        <Header>
            All available <Blue>stocks</Blue>
        </Header>
    ),
    auth: (
        <Header>
            <Blue>Stocks</Blue>
        </Header>
    ),
    stock: (name: string) => (
        <Header>
            {name} <Blue>stock</Blue>
        </Header>
    ),
};
