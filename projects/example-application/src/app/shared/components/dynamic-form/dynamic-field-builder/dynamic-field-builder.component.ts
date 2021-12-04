import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicField } from '../shared/dynamic-field.model';
import { DynamicFieldType } from '../shared/dynamic-field.type.enum';

@Component({
  selector: 'shared-dynamic-field-builder',
  templateUrl: './dynamic-field-builder.component.html',
  styleUrls: ['./dynamic-field-builder.component.scss']
})
export class DynamicFieldBuilderComponent
{
  dynamicFieldType = DynamicFieldType;

  @Input() dynamicField!: DynamicField<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.dynamicField.field].valid; }

  constructor() { }
}
