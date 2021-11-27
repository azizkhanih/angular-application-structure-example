import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function EmailValidator(): ValidatorFn
{
    return (control: AbstractControl): ValidationErrors | null =>
    {
        const value = control.value;

        if (!value)
        {
            return null;
        }

        const emailRegularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const emailValid = emailRegularExpression.test(String(value).toLowerCase());

        return !emailValid ? { email: true } : null;
    };
}