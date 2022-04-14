import * as React from 'react';

import { AuthModal } from '../../components/auth-modal';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { ROUTES } from '../../routes';
import { HEADERS } from '../../texts';
import { SignupForm } from './containers/signup-form';

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
