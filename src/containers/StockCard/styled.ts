import styled from 'styled-components';

import { FONTS } from '../../constants/styles';

export const CardHeader = styled.h4`
    ${FONTS.localHeaderBold}
`;

export const NameText = styled.p`
    ${FONTS.smallText}
    text-align: right;
`;

export const BalanceText = styled.p`
    ${FONTS.text}
    text-align: right;
`;
