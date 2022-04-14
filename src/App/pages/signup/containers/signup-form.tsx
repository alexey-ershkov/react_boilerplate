import { DefaultButton } from '@fluentui/react';
import * as React from 'react';
import { Form } from 'react-final-form';

import { BtnRightRow, SignupFinalFormRow } from '../../../containers/final-form-fields';

const onSubmit = () => {};

const nameField = SignupFinalFormRow('name', 'First name');
const surnameField = SignupFinalFormRow('surname', 'Last name');
const emailField = SignupFinalFormRow('email', 'E=mail');
const passwordField = SignupFinalFormRow('password', 'Password', 'password');
const confirmField = SignupFinalFormRow('confirm', 'Repeat password', 'password');

export const SignupForm = () => {
    return (
        <Form
            onSubmit={onSubmit}
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
