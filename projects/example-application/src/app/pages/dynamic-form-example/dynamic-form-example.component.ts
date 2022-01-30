import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DynamicField } from '../../shared/components/dynamic-form/shared/dynamic-field.model';
import { DynamicFormExampleService } from './dynamic-form-example.service';

@Component({
  selector: 'app-dynamic-form-example',
  templateUrl: './dynamic-form-example.component.html',
  styleUrls: ['./dynamic-form-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormExampleComponent implements OnInit
{
  dynamicFields$: Observable<DynamicField<any>[]>;

  constructor(private dynamicFormExampleService: DynamicFormExampleService)
  {
    this.dynamicFields$ = dynamicFormExampleService.getDynamicFields();
  }

  ngOnInit(): void
  {
  }
}
