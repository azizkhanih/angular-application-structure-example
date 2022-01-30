import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksRoadmapExampleComponent } from './tasks-roadmap-example.component';

describe('TasksRoadmapExampleComponent', () => {
  let component: TasksRoadmapExampleComponent;
  let fixture: ComponentFixture<TasksRoadmapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksRoadmapExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksRoadmapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
