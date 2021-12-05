import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnsubscribeOnDestroy } from '../../../../core/UnsubscribeOnDestroy';
import { DynamicField } from '../shared/dynamic-field.model';
import { DynamicFieldBuilderControlService } from '../shared/dynamic-form-control.service';

@Component({
  selector: 'shared-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormBuilderComponent extends UnsubscribeOnDestroy implements OnInit, OnDestroy
{
  @Input() dynamicFields: DynamicField<string>[] | null = [];
  form!: FormGroup;
  submitted = false;

  constructor(
    private dynamicFieldBuilderControlService: DynamicFieldBuilderControlService,
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder)
  {
    super();
    this.form = this.formBuilder.group({});
  }

  ngOnInit()
  {
    this.form = this.dynamicFieldBuilderControlService.toFormGroup(this.dynamicFields as DynamicField<any>[]);
  }

  onSubmit()
  {
    this.submitted = true;
    this.changeDetectorRef.detectChanges();
    // stop here if form is invalid
    if (this.form.invalid)
    {
      return;
    }

    //TODO: send to api
    console.log(JSON.stringify(this.form.getRawValue()));
  }

}
