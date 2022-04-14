import { DefaultButton } from '@fluentui/react';
import { UserInfo } from 'besthack_exchange_api_typings_and_utils';
import { AuthUserInfo } from 'besthack_exchange_api_typings_and_utils/models/User';
import { FormApi } from 'final-form';
import * as React from 'react';
import { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useStore } from 'react-redux';

import { api } from '../../../../utils/api';
import { validation } from '../../../../utils/form-helpers';
import { BtnRightRow, FinalFormField, Row } from '../../../containers/final-form-fields';

const emailField = FinalFormField('email', null, 'E-mail');
const passwordField = FinalFormField('password', 'password', 'Password');

function useSubmitSend(values) {
    // const { data, isSuccess } = useLoginQuery(values);
    // if (isSuccess) {
    //     console.log('ok', data);
    //     // положить пользователя в стор
    //     return null;
    // }
    // return data;
    // const { data, error, isLoading } = useGetUserInfoQuery();
    // fetchGet('/auth');
    // return null; -- в случае успеха // и шо?
    // return { email: 'err login', password: 'err pswd' };
}

export const LoginForm = () => {
    // const [submit, setSubmit] = useState(false);
    // const [values, setValues] = useState({});
    // const onSubmit = () => {
    //     setSubmit(true);
    // };
    // const;
    // const onSubmit = async (values: AuthUserInfo): Promise<UserInfo | null> => {
    //     const { data, isSuccess } = useLoginQuery(values);
    //
    //     if (isSuccess) {
    //         console.log('ok', data);
    //         // положить пользователя в стор
    //         return null;
    //     }
    //     return data;
    //     // const { data, error, isLoading } = useGetUserInfoQuery();
    //     // fetchGet('/auth');
    //
    //     // return null; -- в случае успеха // и шо?
    //     // return { email: 'err login', password: 'err pswd' };
    // };

    const store = useStore();
    const onSubmit = (values) => {
        // api.endpoints.login.select(values)(state);
    };

    return (
        <Form
            onSubmit={useSubmitSend}
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
