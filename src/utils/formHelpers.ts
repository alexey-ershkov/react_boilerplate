import { Validators } from '@lemoncode/fonk';
import { createFinalFormValidation } from '@lemoncode/fonk-final-form';
import { matchField } from '@lemoncode/fonk-match-field-validator';

const maxLengthValidator = {
    validator: Validators.maxLength,
    customArgs: { length: 420 },
    message: 'Too long',
};
const requiredValidator = {
    validator: Validators.required,
    message: 'Required',
};

const authValidationSchema = {
    field: {
        name: [requiredValidator, maxLengthValidator],
        surname: [requiredValidator, maxLengthValidator],
        email: [
            requiredValidator,
            maxLengthValidator,
            {
                validator: Validators.email,
                message: 'Invalid',
            },
        ],
        password: [
            requiredValidator,
            maxLengthValidator,
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'Too short',
            },
        ],
        confirm: [
            {
                validator: matchField.validator,
                customArgs: { field: 'password' },
                message: 'Passwords should match',
            },
        ],
    },
};

export const validation = createFinalFormValidation(authValidationSchema);
