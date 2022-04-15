import styled from 'styled-components';

import { DEPTH, GAP, MOBILE_WIDTH } from '../../constants/styles';

export const Wrapper = styled.div<{ styles: Record<string, any> }>`
    padding: ${GAP.xl};
    box-shadow: ${DEPTH.s};
    background-color: white;
    box-sizing: border-box;

    @media (min-width: ${MOBILE_WIDTH}) {
        width: 49%;
    }

    ${({ styles }) => styles}
`;
