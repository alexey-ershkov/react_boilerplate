import { DefaultButton } from '@fluentui/react';
import { decamelize } from 'besthack_exchange_api_typings_and_utils';
import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../../../api';
import { ROUTES } from '../../../../App/routes';
import { FormField } from '../../../../containers/FormFields';
import { BtnRightRow, Row } from '../../../../containers/FormFields/styled';
import { validation } from '../../../../utils/formHelpers';

const emailField = FormField('email', null, 'E-mail');
const passwordField = FormField('password', 'password', 'Password');

interface SubmitData {
    email: string;
    password: string;
}

const onSubmit = (registerFunc) => (values: SubmitData) => {
    registerFunc(decamelize(values));
};

export const LoginForm = () => {
    const [login, { isSuccess }] = useLoginMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate(ROUTES.profile);
        }
    }, [isSuccess]);

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
