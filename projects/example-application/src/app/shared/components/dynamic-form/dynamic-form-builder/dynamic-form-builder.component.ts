import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'projects/tools/src/public-api';
import { UnsubscribeOnDestroy } from '../../../../core/unsubscribe-on-destroy';
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
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private snackBarService: SnackBarService)
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

    this.snackBarService.showInfo(
      `${ this.translateService.instant("DYNAMIC_FORM.FORM_RESULT") } => ${ JSON.stringify(this.form.getRawValue()) }`
    );
  }
};
