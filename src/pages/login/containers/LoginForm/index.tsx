import { DefaultButton } from '@fluentui/react';
import { decamelize } from 'besthack_exchange_api_typings_and_utils';
import React, { useCallback, useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../../../api';
import { ROUTES } from '../../../../App/routes';
import { FormField } from '../../../../containers/FormFields';
import { BtnRightRow, Row } from '../../../../containers/FormFields/styled';
import { validation } from '../../../../utils/formHelpers';

const EmailField = FormField('email', null, 'E-mail');
const PasswordField = FormField('password', 'password', 'Password');

interface SubmitData {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const [login, { isSuccess, isError, error }] = useLoginMutation();
    const navigate = useNavigate();

    const onSubmit = (registerFunc) => (values: SubmitData) => {
        registerFunc(decamelize(values));
    };

    useEffect(() => {
        if (isSuccess) {
            navigate(ROUTES.profile);
        }
    }, [isSuccess]);

    const emailField = useCallback(
        (props) => (
            <EmailField
                externalError={
                    isError &&
                    'status' in error &&
                    error.status === 404 &&
                    'User with this email not found'
                }
                {...props}
            />
        ),
        [isError],
    );

    const passwordField = useCallback(
        (props) => (
            <PasswordField
                externalError={
                    isError &&
                    ('status' in error
                        ? error.status === 401 && 'Invalid password'
                        : 'Invalid email or password')
                }
                {...props}
            />
        ),
        [isError],
    );

    return (
        <Form
            onSubmit={onSubmit(login)}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Field
                            name="email"
                            validate={(value, _, meta) =>
                                validation.validateField(meta.name, value)
                            }
                            component={emailField}
                        />
                    </Row>
                    <Row>
                        <Field
                            name="password"
                            validate={(value, _, meta) =>
                                validation.validateField(meta.name, value)
                            }
                            component={passwordField}
                        />
                    </Row>

                    <BtnRightRow>
                        <DefaultButton type="submit">Enter</DefaultButton>
                    </BtnRightRow>
                </form>
            )}
        />
    );
};
