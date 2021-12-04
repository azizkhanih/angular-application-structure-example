import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UnsubscribeOnDestroy } from '../../../../core/UnsubscribeOnDestroy';
import { DynamicField } from '../shared/dynamic-field.model';
import { DynamicFieldBuilderControlService } from '../shared/dynamic-form-control.service';

@Component({
  selector: 'shared-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent extends UnsubscribeOnDestroy implements OnInit, OnDestroy
{
  @Input() dynamicFields: DynamicField<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private dynamicFieldBuilderControlService: DynamicFieldBuilderControlService)
  {
    super();
  }

  ngOnInit()
  {
    this.form = this.dynamicFieldBuilderControlService.toFormGroup(this.dynamicFields as DynamicField<string>[]);
  }

  onSubmit()
  {
    //TODO: send to api
    console.log(JSON.stringify(this.form.getRawValue()));
  }

}
