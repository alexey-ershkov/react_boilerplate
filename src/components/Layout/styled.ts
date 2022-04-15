import { NeutralColors } from '@fluentui/theme';
import styled from 'styled-components';

import { GAP, MOBILE_WIDTH, TABLET_WIDTH } from '../../constants/styles';

export const StyledLayout = styled.div`
    background-color: ${NeutralColors.gray10};

    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-content: center;

    padding: 0 15vw;

    @media (max-width: ${TABLET_WIDTH}) {
        padding: 0 5vw;
    }
    @media (max-width: ${MOBILE_WIDTH}) {
        padding: 0;
    }
`;
export const Columns = styled.div`
    display: flex;
    gap: ${GAP.l};

    @media (min-width: ${TABLET_WIDTH + 1}) {
        flex-direction: row;
    }
    @media (max-width: ${TABLET_WIDTH}) {
        flex-direction: column;
        background: red;
    }
`;
