import { NeutralColors } from '@fluentui/theme';
import * as React from 'react';
import styled from 'styled-components';

import { MOBILE_WIDTH } from '../styles';

interface LayoutProps {
    header: React.ReactNode;
    left: React.ReactNode;
    right?: React.ReactNode;
}

export const Layout = ({ header, left, right = null }: LayoutProps) => {
    const StyledLayout = styled.div`
        background-color: ${NeutralColors.gray10};

        width: 100%;
        height: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-content: center;

        @media (min-width: ${MOBILE_WIDTH}) {
            padding: 0 15vw;
        }
    `;
    const Columns = styled.div`
        display: flex;
        flex-direction: row;
    `;
    return (
        <StyledLayout>
            {header}
            {right ? (
                <Columns>
                    {left}
                    {right}
                </Columns>
            ) : (
                left
            )}
        </StyledLayout>
    );
};
