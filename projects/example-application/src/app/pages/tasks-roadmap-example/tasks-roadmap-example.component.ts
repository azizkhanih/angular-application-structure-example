import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-roadmap-example',
  templateUrl: './tasks-roadmap-example.component.html',
  styleUrls: ['./tasks-roadmap-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksRoadmapExampleComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
  }
}
