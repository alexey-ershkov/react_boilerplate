import React from 'react';

import { ROUTES } from '../../App/routes';
import { AuthModal } from '../../components/AuthModal';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { HEADERS } from '../../constants/texts';
import { SignupForm } from './containers/SignupForm';

export const SignupPage = () => {
    return (
        <Layout
            header={<Header pageName={HEADERS.auth} />}
            left={
                <AuthModal header="Sign up" link={{ text: 'Go to log in', link: ROUTES.login }}>
                    <SignupForm />
                </AuthModal>
            }
        />
    );
};
