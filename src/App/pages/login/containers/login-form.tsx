import { DefaultButton } from '@fluentui/react';
import { decamelize } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../../../api';
import { validation } from '../../../../utils/form-helpers';
import { BtnRightRow, FinalFormField, Row } from '../../../containers/final-form-fields';
import { ROUTES } from '../../../routes';
import { useEffect } from 'react';

const emailField = FinalFormField('email', null, 'E-mail');
const passwordField = FinalFormField('password', 'password', 'Password');

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
