import { Link as UILink } from '@fluentui/react';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { DEPTH, FONTS, GAP, MOBILE_WIDTH } from '../styles';

interface AuthModalProps {
    header: string;
    link: {
        text: string;
        link: string;
    };
    children: React.ReactNode;
}

export const AuthModal = ({ header, link, children }: AuthModalProps) => {
    const Wrapper = styled.div`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    `;

    const HeaderWrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    `;
    const HeaderText = styled.h2`
        ${FONTS.localHeader}
    `;

    const ModalWrapper = styled.div`
        @media (min-width: ${MOBILE_WIDTH}) {
            width: 360px;
        }
        @media (max-width: ${MOBILE_WIDTH}) {
            width: 100%;
        }

        padding: ${GAP.xl};
        max-width: 360px;
        box-shadow: ${DEPTH.l};
        background-color: white;

        display: flex;
        flex-direction: column;
        gap: ${GAP.m};
    `;

    return (
        <Wrapper>
            <ModalWrapper>
                <HeaderWrapper>
                    <HeaderText>{header}</HeaderText>
                    <UILink>
                        <RouterLink to={link.link}>{link.text}</RouterLink>
                    </UILink>
                </HeaderWrapper>
                {children}
            </ModalWrapper>
        </Wrapper>
    );
};
