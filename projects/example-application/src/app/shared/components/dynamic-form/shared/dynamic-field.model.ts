import { Validators } from '@angular/forms';
import { DynamicFieldType } from "./dynamic-field.type.enum";

export class DynamicField<T> {
    value: T | undefined;
    field: string;
    label: string;
    mandatory: boolean;
    hidden: boolean;
    order: number;
    controlType: DynamicFieldType;
    type: string;
    options: { field: string, value: string; }[];
    validators: Validators[];

    constructor(
        options: {
            value?: T;
            field?: string;
            label?: string;
            mandatory?: boolean;
            hidden?: string;
            order?: number;
            controlType?: DynamicFieldType;
            type?: string;
            options?: { field: string, value: string; }[];
            validators?: string[];
        } = {})
    {
        this.value = options.value;
        this.field = options.field || '';
        this.label = options.label || '';
        this.mandatory = !!options.mandatory;
        this.hidden = options.hidden === 'true';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || DynamicFieldType.InputText;
        this.type = options.type || '';
        this.options = options.options || [];
        this.validators = this.mapValidators(options.validators);
    }

    mapValidators(validators: string[] | undefined): Validators[]
    {
        const validatorsList: Validators[] = [];
        if (validators && validators.length > 0)
        {
            validators?.forEach(validator =>
            {
                let validatorType = null;
                switch (validator)
                {
                    case 'email':
                        validatorType = Validators.email;
                        break;
                }

                if (validatorType)
                {
                    validatorsList.push(validatorType);
                }
            });
        }
        return validatorsList;
    }
}