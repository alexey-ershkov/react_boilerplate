import { DefaultButton } from '@fluentui/react';
import { CreateUserInfo, decamelize } from 'besthack_exchange_api_typings_and_utils';
import React, { useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { useRegisterMutation } from '../../../../api';
import { ROUTES } from '../../../../App/routes';
import { SignupFormRow } from '../../../../containers/FormFields';
import { BtnRightRow } from '../../../../containers/FormFields/styled';

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
        registerFunc(decamelize(mappedData));
    };

const nameField = SignupFormRow('name', 'First name');
const surnameField = SignupFormRow('surname', 'Last name');
const passwordField = SignupFormRow('password', 'Password', 'password');
const confirmField = SignupFormRow('confirm', 'Repeat password', 'password');

export const SignupForm = () => {
    const [register, { isSuccess, isError }] = useRegisterMutation();
    const navigate = useNavigate();

    const emailField = useMemo(
        () => SignupFormRow('email', 'E-mail', undefined, isError ? 'User already exists' : null),
        [isError],
    );

    useEffect(() => {
        if (isSuccess) {
            navigate(ROUTES.profile);
        }
    }, [isSuccess]);

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
