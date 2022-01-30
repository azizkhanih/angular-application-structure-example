import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { DynamicField } from '../shared/dynamic-field.model';
import { DynamicFieldType } from '../shared/dynamic-field.type.enum';

@Component({
  selector: 'shared-dynamic-field-builder',
  templateUrl: './dynamic-field-builder.component.html',
  styleUrls: ['./dynamic-field-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFieldBuilderComponent
{
  dynamicFieldType = DynamicFieldType;

  @Input() dynamicField!: DynamicField<any>;
  @Input() form!: FormGroup;
  @Input() submitted = false;

  get fieldErrors(): ValidationErrors | null
  {
    return this.form.controls[this.dynamicField.key].errors;
  }

  constructor() { }
}
