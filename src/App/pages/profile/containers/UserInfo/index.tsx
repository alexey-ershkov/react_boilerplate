import { DefaultButton, Persona, PersonaSize } from '@fluentui/react';
import { UserInfo as UserInfoProps } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';

import { CardWrapper } from '../../../../components/card-wrapper';
import { BaselineRow, ElemRight } from '../../../../components/row';
import { COLORS, GAP } from '../../../../styles';
import { Balance, Label } from './styled';

export const UserInfo = ({ firstName, lastName, email, balance }: UserInfoProps) => {
    return (
        <CardWrapper styles={{ display: 'flex', flexDirection: 'column', gap: String(GAP.s) }}>
            <Persona
                text={`${firstName} ${lastName}`}
                secondaryText={email}
                size={PersonaSize.size120}
                initialsColor={COLORS.DEFAULT}
            />
            <BaselineRow>
                <Label>Balance</Label>
                <Balance>{balance} $</Balance>
            </BaselineRow>
            <ElemRight>
                <DefaultButton>Fill</DefaultButton>
            </ElemRight>
        </CardWrapper>
    );
};
