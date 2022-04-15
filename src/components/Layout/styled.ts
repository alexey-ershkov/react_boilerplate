import { NeutralColors } from '@fluentui/theme';
import styled from 'styled-components';

import { GAP, MOBILE_WIDTH } from '../../constants/styles';

export const StyledLayout = styled.div`
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
export const Columns = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${GAP.l};
`;
