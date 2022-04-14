import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FONTS, HEADER_GRADIENT, MOBILE_WIDTH } from '../styles';

interface HeaderProps {
    pageName: React.ReactNode;
    buttons?: {
        text: string;
        link: string;
    }[];
}

export const Header = ({ pageName, buttons = [] }: HeaderProps) => {
    const justify = buttons.length > 0 ? 'space-between' : 'center';

    const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: ${justify};
        align-items: center;
        @media (min-width: ${MOBILE_WIDTH}) {
            height: 200px;
        }
    `;

    const HeaderButton = styled(PrimaryButton)`
        @media (min-width: ${MOBILE_WIDTH}) {
            min-height: 52px;
        }
    `;

    return (
        <Wrapper>
            {pageName}
            <div>
                {buttons.map(({ text, link }) => {
                    return (
                        <Link to={link}>
                            <HeaderButton text={text} />
                        </Link>
                    );
                })}
            </div>
        </Wrapper>
    );
};
