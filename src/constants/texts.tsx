import React from 'react';
import styled from 'styled-components';

import { FONTS, HEADER_GRADIENT } from './styles';

export const HEADER_BUTTONS = {
    goLogin: 'Create your portfolio',
    goProfile: 'Show my stock portfolio',
    goMain: 'Show all available stocks',
};

const Header = styled.h1`
    ${FONTS.header}
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
