import styled from 'styled-components';

import { GAP, MOBILE_WIDTH } from '../../constants/styles';

export const CardsWrapper = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: ${MOBILE_WIDTH}) {
        flex-direction: column;
        gap: ${GAP.l};
    }
    @media (min-width: ${MOBILE_WIDTH}) {
        flex-wrap: wrap;
        gap: 2%;
        row-gap: ${GAP.l};
    }
`;
