import * as React from 'react';
import { useMemo } from 'react';

import { useGetUserInfoQuery } from '../../../api';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { ROUTES } from '../../routes';
import { HEADER_BUTTONS, HEADERS } from '../../texts';

export const CommonPage = () => {
    const { isError, isSuccess } = useGetUserInfoQuery();

    const buttons = useMemo(() => {
        if (isError) {
            return [
                {
                    text: HEADER_BUTTONS.goLogin,
                    link: ROUTES.login,
                },
            ];
        }
        if (isSuccess) {
            return [
                {
                    text: HEADER_BUTTONS.goProfile,
                    link: ROUTES.profile,
                },
            ];
        }
        return [];
    }, [isError, isSuccess]);

    return (
        <Layout header={<Header pageName={HEADERS.main} buttons={buttons} />} left={<p>main</p>} />
    );
};
