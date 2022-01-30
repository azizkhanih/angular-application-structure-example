import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { LoadingModule, SnackBarModule } from 'projects/tools/src/public-api';
import { Observable } from 'rxjs';
import { DynamicField } from '../shared/dynamic-field.model';
import { DynamicFieldBuilderControlService } from '../shared/dynamic-form-control.service';
import { InputText } from '../shared/field-type/input-text';
import { DynamicFieldBuilderComponent } from './dynamic-field-builder.component';

const BASE_MODULES = [
  CommonModule,
  ReactiveFormsModule
];
const VENDORS_MODULES = [TranslateModule.forChild({ extend: true })];
const TOOLS_MODULES = [SnackBarModule, LoadingModule];

const dynamicFieldInputNameStubData = new InputText(
  {
    value: '',
    key: "name",
    label: "Name",
    type: "text",
    hidden: "false",
    required: true,
    order: 1
  });

describe('DynamicFieldBuilderComponent', () =>
{
  let component: DynamicFieldBuilderComponent;
  let fixture: ComponentFixture<DynamicFieldBuilderComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [DynamicFieldBuilderComponent],
      imports: [
        ...BASE_MODULES,
        ...VENDORS_MODULES,
        ...TOOLS_MODULES
      ],
      providers: [
        TranslateStore,
        { provide: DynamicFieldBuilderControlService, useClass: DynamicFieldBuilderControlServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(DynamicFieldBuilderComponent);
    component = fixture.componentInstance;

    component.form = new FormGroup({ name: new FormControl('', Validators.required) });
    component.dynamicField = dynamicFieldInputNameStubData;
    component.submitted = false;

    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should render input text elements', () =>
  {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[id="name"]');

    expect(nameInput).toBeTruthy();
  });

  it('should test form validity', () =>
  {
    const form = component.form;
    expect(form.valid).toBeFalsy();

    const nameInput = form.controls['name'];
    nameInput.setValue('Hossein Azizkhani');

    expect(form.valid).toBeTruthy();
  });

  it('should test input text validity', () =>
  {
    const nameInput = component.form.controls['name'];

    expect(nameInput.valid).toBeFalsy();

    nameInput.setValue('Hossein Azizkhani');
    expect(nameInput.valid).toBeTruthy();
  });
});

const stubData = {};

class DynamicFieldBuilderControlServiceMock
{
  toFormGroup(dynamicFields: DynamicField<string>[])
  {
    return new Observable<any>(observer =>
    {
      observer.next(
        stubData
      );
    });
  }
}
