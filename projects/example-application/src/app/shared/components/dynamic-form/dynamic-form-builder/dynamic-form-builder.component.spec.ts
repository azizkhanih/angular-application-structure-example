import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { DynamicExampleService } from 'projects/example-application/src/app/pages/dynamic-example/dynamic-example.service';
import { Observable } from 'rxjs';
import { DynamicField } from '../shared/dynamic-field.model';
import { DynamicFieldBuilderControlService } from '../shared/dynamic-form-control.service';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';

const BASE_MODULES = [
  CommonModule,
  ReactiveFormsModule
];
const MATERIAL_MODULES = [MatIconModule, MatButtonModule];
const VENDORS_MODULES = [TranslateModule.forChild({ extend: true })];

const dynamicFieldStubData = [
  {
    controlType: 0,
    field: "name",
    hidden: false,
    label: "Name",
    mandatory: true,
    options: [],
    order: 1,
    type: "text",
    validators: [],
    value: "",
  },
  {
    controlType: 1,
    field: "confirm",
    hidden: false,
    label: "Checkbox with confirmation",
    mandatory: false,
    options: [],
    order: 3,
    type: "check",
    validators: [],
    value: false
  }
];

class DynamicExampleServiceMock extends DynamicExampleService
{
  override getDynamicFields(): Observable<DynamicField<any>[]>
  {
    return new Observable<any>(observer =>
    {
      observer.next(
        dynamicFieldStubData
      );
    });
  }
}

describe('DynamicFormBuilderComponent', () =>
{
  let component: DynamicFormBuilderComponent;
  let fixture: ComponentFixture<DynamicFormBuilderComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  let newDynamicExampleServiceMock = new DynamicExampleServiceMock();

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormBuilderComponent],
      imports: [
        ...BASE_MODULES,
        ...MATERIAL_MODULES,
        ...VENDORS_MODULES
      ],
      providers: [
        TranslateStore,
        { provide: DynamicExampleService },
        { provide: DynamicFieldBuilderControlService, useClass: DynamicFieldBuilderControlServiceMock }
      ]
    })
      .overrideProvider(DynamicExampleService, { useValue: newDynamicExampleServiceMock })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(DynamicFormBuilderComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('retrieves the dynamic field list', async () =>
  {
    newDynamicExampleServiceMock.getDynamicFields().subscribe(result =>
    {
      expect(result.length).toBeGreaterThan(0);
    });
  });

  it('should render submit input', async () =>
  {
    const compiled = fixture.debugElement.nativeElement;
    const submitInput = compiled.querySelector('button[id="submit"]');
    expect(submitInput).toBeTruthy();
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