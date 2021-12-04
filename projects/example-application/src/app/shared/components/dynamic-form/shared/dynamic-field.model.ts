import { DynamicFieldType } from "./dynamic-field.type.enum";

export class DynamicField<T> {
    value: T | undefined;
    field: string;
    label: string;
    mandatory: boolean;
    hidden: string;
    order: number;
    controlType: DynamicFieldType;
    type: string;
    options: { field: string, value: string; }[];

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
        } = {})
    {
        this.value = options.value;
        this.field = options.field || '';
        this.label = options.label || '';
        this.mandatory = options.mandatory === true;
        this.hidden = options.hidden || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || DynamicFieldType.InputText;
        this.type = options.type || '';
        this.options = options.options || [];
    }
}