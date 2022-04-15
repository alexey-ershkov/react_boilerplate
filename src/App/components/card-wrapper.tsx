import * as React from 'react';
import styled from 'styled-components';

import { DEPTH, GAP, MOBILE_WIDTH, WILD_WIDTH } from '../styles';

interface CardWrapperProps {
    children: React.ReactNode;
    styles?: Record<string, string>;
}

export const CardWrapper = ({ children, styles = {} }: CardWrapperProps) => {
    const Wrapper = styled.div`
        padding: ${GAP.xl};
        box-shadow: ${DEPTH.s};
        background-color: white;
        box-sizing: border-box;

        @media (min-width: ${WILD_WIDTH}) {
            width: 49%;
        }
        @media (max-width: ${MOBILE_WIDTH}) {
            width: 100%;
        }

        ${styles}
    `;

    return <Wrapper>{children}</Wrapper>;
};
