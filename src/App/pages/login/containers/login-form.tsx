import { DefaultButton } from '@fluentui/react';
import { FormApi } from 'final-form';
import * as React from 'react';
import { Field, Form } from 'react-final-form';

import { validation } from '../../../../utils/form-helpers';
import { BtnRightRow, FinalFormField, Row } from '../../../containers/final-form-fields';

const onSubmit = async (values: string[], form: FormApi): Promise<Record<string, string>> => {
    // fetchGet('/auth');
    console.log(values);
    // return null; -- в случае успеха // и шо?
    return { email: 'err login', password: 'err pswd' };
};

const emailField = FinalFormField('email', null, 'E-mail');
const passwordField = FinalFormField('password', 'password', 'Password');

export const LoginForm = () => {
    return (
        <Form
            onSubmit={onSubmit}
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
