import { Label, TextField } from '@fluentui/react';
import * as React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import { validation } from '../../utils/form-helpers';
import { GAP } from '../styles';

export const Row = styled.div`
    padding-bottom: ${GAP.m};
`;

export const BtnRightRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-top: ${GAP.m};
`;

interface FinalFormProps {
    input: { onChange: (event: unknown) => void; value: string };
    meta: {
        error?: string;
        submitError?: string;
        touched?: boolean;
    };
}

export const FinalFormField =
    (id: string, type?: string, placeholder?: string) =>
    ({ input, meta }: FinalFormProps) =>
        (
            <TextField
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete={`section-blue ${id}`}
                onChange={input.onChange}
                value={input.value}
                errorMessage={
                    (meta.error || meta.submitError) && meta.touched
                        ? meta.error || meta.submitError
                        : null
                }
            />
        );

type SignupField = 'name' | 'surname' | 'email' | 'password' | 'confirm';

export const SignupFinalFormRow = (id: SignupField, label: string, type?: string) => (
    <Row>
        <Label htmlFor={id}>{label}</Label>
        <Field
            name={id}
            id={id}
            validate={(value, values, meta) => validation.validateField(meta.name, value, values)}
            component={FinalFormField(id, type)}
        />
    </Row>
);
