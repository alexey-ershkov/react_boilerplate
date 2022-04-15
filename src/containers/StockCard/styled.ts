import styled from 'styled-components';

import { FONTS, GAP } from '../../constants/styles';

export const Row = styled.div`
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
