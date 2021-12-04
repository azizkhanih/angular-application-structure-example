import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFieldBuilderComponent } from './dynamic-field-builder.component';


describe('DynamicFieldBuilderComponent', () =>
{
  let component: DynamicFieldBuilderComponent;
  let fixture: ComponentFixture<DynamicFieldBuilderComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [DynamicFieldBuilderComponent]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(DynamicFieldBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
