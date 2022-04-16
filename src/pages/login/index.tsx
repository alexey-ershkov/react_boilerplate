import React from 'react';

import { ROUTES } from '../../App/routes';
import { AuthModal } from '../../components/AuthModal';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { HEADERS } from '../../constants/texts';
import { LoginForm } from './containers/LoginForm';

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
