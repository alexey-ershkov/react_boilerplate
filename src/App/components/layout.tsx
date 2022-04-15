import { NeutralColors } from '@fluentui/theme';
import * as React from 'react';
import styled from 'styled-components';

import { GAP, MOBILE_WIDTH, WILD_WIDTH } from '../styles';

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

        @media (min-width: ${WILD_WIDTH}) {
            padding: 0 15vw;
        }
        @media (max-width: ${WILD_WIDTH}) and (min-width: ${MOBILE_WIDTH}) {
            padding: 0 5vw;
        }
    `;
    const Columns = styled.div`
        display: flex;

        gap: ${GAP.l};
        @media (min-width: ${MOBILE_WIDTH + 1}) {
            flex-direction: column;
        }
        @media (max-width: ${MOBILE_WIDTH}) {
            flex-direction: row;
        }
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
