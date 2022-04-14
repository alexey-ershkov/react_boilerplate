import * as React from 'react';

import { AuthModal } from '../../components/auth-modal';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { ROUTES } from '../../routes';
import { HEADERS } from '../../texts';
import { LoginForm } from './containers/login-form';

export const LoginPage = () => {
    return (
        <Layout
            header={<Header pageName={HEADERS.auth} />}
            left={
                <AuthModal header="Log in" link={{ text: 'Go to sign up', link: ROUTES.signup }}>
                    <LoginForm />
                </AuthModal>
            }
        />
    );
};
