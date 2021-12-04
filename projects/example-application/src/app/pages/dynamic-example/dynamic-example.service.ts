import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import data from '../../../assets/static-files/to-render.json';
import { DynamicField } from '../../shared/components/dynamic-form/shared/dynamic-field.model';
import { InputCheckbox } from '../../shared/components/dynamic-form/shared/input-checkbox';
import { InputText } from '../../shared/components/dynamic-form/shared/input-text';

@Injectable()
export class DynamicExampleService
{
  getDynamicFields()
  {
    console.log(data);
    const dynamicFields: DynamicField<any>[] = [];

    data.forEach((item: any) =>
    {
      let field = null;

      switch (item.type)
      {
        case 'text':
          field = new InputText({
            value: ''
          });
          break;
        case 'check':
          field = new InputCheckbox({
            value: false
          });
          break;
        default:
          console.error('Form type is not valid');
      }

      if (field)
      {
        dynamicFields.push({
          ...field,
          field: item.field,
          label: item.label,
          mandatory: item.mandatory,
          hidden: item.hidden
        });
      }
    });
    return of(dynamicFields.sort((a, b) => a.order - b.order));
  }
}