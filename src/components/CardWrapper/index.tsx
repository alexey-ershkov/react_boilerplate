import React from 'react';

import { Wrapper } from './styled';

interface CardWrapperProps {
    children: React.ReactNode;
    styles?: Record<string, string>;
}

export const CardUI = ({ children, styles = {} }: CardWrapperProps) => {
    return <Wrapper styles={styles}>{children}</Wrapper>;
};
