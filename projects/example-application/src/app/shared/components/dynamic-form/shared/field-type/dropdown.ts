import { DynamicField } from "../dynamic-field.model";
import { DynamicFieldType } from "../dynamic-field.type.enum";

export class Dropdown extends DynamicField<string> {
    override controlType = DynamicFieldType.Dropdown;
}