import { DynamicField } from '../dynamic-field.model';
import { DynamicFieldType } from '../dynamic-field.type.enum';

export class InputCheckbox extends DynamicField<boolean> {
    override controlType = DynamicFieldType.InputCheckBox;
}
