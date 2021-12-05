import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import data from '../../../assets/static-files/to-render.json';
import { DynamicField } from '../../shared/components/dynamic-form/shared/dynamic-field.model';
import { InputCheckbox } from '../../shared/components/dynamic-form/shared/field-type/input-checkbox';
import { InputText } from '../../shared/components/dynamic-form/shared/field-type/input-text';

@Injectable()
export class DynamicExampleService
{
  getDynamicFields(): Observable<DynamicField<any>[]>
  {
    const dynamicFields: DynamicField<any>[] = [];

    data.forEach((item: any) =>
    {
      let field = new DynamicField();

      switch (item.type)
      {
        case 'text':
          field = new InputText({
            ...item,
            value: '',
          });
          break;
        case 'check':
          field = new InputCheckbox({
            ...item,
            value: false,
          });
          break;
        default:
          console.error('Form type is not valid');
          throwError;
      }

      dynamicFields.push(field);
    });

    return of(dynamicFields.sort((a, b) => a.order - b.order));
  }
}