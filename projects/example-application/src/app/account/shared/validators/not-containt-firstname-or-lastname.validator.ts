import { FormGroup } from '@angular/forms';

export function NotContainFirstNameOrLastNameValidator(controlName: string, firstNameControlName: string, lastNameControlName: string)
{
    return (formGroup: FormGroup) =>
    {
        const control = formGroup.controls[controlName];
        const firstNameControl = formGroup.controls[firstNameControlName];
        const lastNameControl = formGroup.controls[lastNameControlName];

        if (control.errors && !control.errors['notContainFirstNameOrLastName'])
        {
            return;
        }

        const controlValue = String(control.value);
        if (controlValue && (controlValue.includes(firstNameControl.value) || controlValue.includes(lastNameControl.value)) &&
            firstNameControl.value && lastNameControl.value)
        {
            control.setErrors({ notContainFirstNameOrLastName: true });
        } else
        {
            control.setErrors(null);
        }
    };
}