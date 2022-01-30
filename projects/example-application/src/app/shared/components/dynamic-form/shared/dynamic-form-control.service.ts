import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicField } from './dynamic-field.model';
import { DynamicFieldType } from './dynamic-field.type.enum';

@Injectable()
export class DynamicFieldBuilderControlService
{
    dynamicFieldType = DynamicFieldType;

    constructor() { }

    toFormGroup(dynamicFields: DynamicField<any>[]): FormGroup
    {
        const group: any = {};

        dynamicFields.forEach(dynamicField =>
        {
            const fieldValue = dynamicField.controlType === this.dynamicFieldType.InputCheckBox ?
                dynamicField.value :
                (dynamicField.value || null);

            let field = dynamicField.required === true ?
                new FormControl(fieldValue, Validators.required)
                : new FormControl(fieldValue);

            dynamicField.validators.forEach((validator) =>
            {
                switch (validator)
                {
                    case Validators.email:
                        field.addValidators(Validators.email);
                        break;
                }
            });

            group[dynamicField.key] = field;
        });
        return new FormGroup(group);
    }
}