import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DynamicField } from '../../shared/components/dynamic-form/shared/dynamic-field.model';
import { DynamicExampleService } from './dynamic-example.service';

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.scss']
})
export class DynamicExampleComponent
{
  dynamicFields$: Observable<DynamicField<any>[]>;

  constructor(private dynamicExampleService: DynamicExampleService)
  {
    this.dynamicFields$ = dynamicExampleService.getDynamicFields();
  }
}
