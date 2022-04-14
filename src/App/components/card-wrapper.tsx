import * as React from 'react';
import styled from 'styled-components';

import { DEPTH, GAP } from '../styles';

interface CardWrapperProps {
    children: React.ReactNode;
    styles?: Record<string, string>;
}

export const CardWrapper = ({ children, styles = {} }: CardWrapperProps) => {
    const Wrapper = styled.div`
        padding: ${GAP.xl};
        box-shadow: ${DEPTH.s};
        background-color: white;

        ${styles}
    `;

    return <Wrapper>{children}</Wrapper>;
};
