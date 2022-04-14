import { DefaultButton } from '@fluentui/react';
import { CreateUserInfo, decamelize } from 'besthack_exchange_api_typings_and_utils';
import * as React from 'react';
import { Form } from 'react-final-form';

import { useRegisterMutation } from '../../../../utils/api';
import { BtnRightRow, SignupFinalFormRow } from '../../../containers/final-form-fields';

interface SubmitData {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirm: string;
}

const onSubmit =
    (registerFunc) =>
    ({ name, surname, email, password }: SubmitData) => {
        const mappedData: CreateUserInfo = {
            firstName: name,
            lastName: surname,
            email,
            password,
        };

        console.log(mappedData);
        registerFunc(decamelize(mappedData));
    };

const nameField = SignupFinalFormRow('name', 'First name');
const surnameField = SignupFinalFormRow('surname', 'Last name');
const emailField = SignupFinalFormRow('email', 'E=mail');
const passwordField = SignupFinalFormRow('password', 'Password', 'password');
const confirmField = SignupFinalFormRow('confirm', 'Repeat password', 'password');

export const SignupForm = () => {
    const [register, data] = useRegisterMutation();

    return (
        <Form
            onSubmit={onSubmit(register)}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {nameField}
                    {surnameField}
                    {emailField}
                    {passwordField}
                    {confirmField}
                    <BtnRightRow>
                        <DefaultButton type="submit">Go</DefaultButton>
                    </BtnRightRow>
                </form>
            )}
        />
    );
};
