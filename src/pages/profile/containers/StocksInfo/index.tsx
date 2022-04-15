import { UserInfo } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';

import { CardWrapper } from '../../../../components/CardWrapper';

type UserStocksProps = Pick<UserInfo, 'id'>;

export const UserStocks = ({ id }: UserStocksProps) => {
    return <CardWrapper>stocks{id}</CardWrapper>;
};
