import styled from 'styled-components';

import { DEPTH, GAP, TABLET_WIDTH } from '../../constants/styles';

export const Wrapper = styled.div<{ styles: Record<string, string> }>`
    padding: ${GAP.xl};
    box-shadow: ${DEPTH.s};
    background-color: white;
    box-sizing: border-box;

    @media (min-width: ${TABLET_WIDTH}) {
        width: 49%;
    }
    @media (max-width: ${TABLET_WIDTH}) {
        width: 100%;
    }

    ${({ styles }) => styles}
`;
