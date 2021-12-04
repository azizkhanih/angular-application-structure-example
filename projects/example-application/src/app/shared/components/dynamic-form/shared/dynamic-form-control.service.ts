import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicField } from './dynamic-field.model';

@Injectable()
export class DynamicFieldBuilderControlService
{
    constructor() { }

    toFormGroup(dynamicFields: DynamicField<string>[])
    {
        const group: any = {};

        dynamicFields.forEach(dynamicField =>
        {
            group[dynamicField.field] = dynamicField.mandatory === true ?
                new FormControl(dynamicField.value || '', Validators.required)
                : new FormControl(dynamicField.value || '');
        });
        return new FormGroup(group);
    }
}