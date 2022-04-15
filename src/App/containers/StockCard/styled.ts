import styled from 'styled-components';

import { FONTS, GAP } from '../../styles';

export const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: ${GAP.s};
    gap: ${GAP.l};
`;

export const SecondRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: ${GAP.s};
    gap: ${GAP.l};
`;

export const CardHeader = styled.h4`
    ${FONTS.localHeaderBold}
`;

export const NameText = styled.p`
    ${FONTS.smallText}
`;
