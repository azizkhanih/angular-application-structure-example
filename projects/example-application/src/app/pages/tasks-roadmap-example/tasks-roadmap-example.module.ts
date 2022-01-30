import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TasksRoadmapExampleComponent } from './tasks-roadmap-example.component';
import { TasksRoadmapExampleService } from './tasks-roadmap-example.service';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const COMPONENTS = [TasksRoadmapExampleComponent];

const routes: Routes = [
    { path: '', component: TasksRoadmapExampleComponent }
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        RouterModule.forChild(routes),
        ...BASE_MODULES,
        ...APP_MODULES
    ],
    providers: [
        TasksRoadmapExampleService
    ]
})
export class TasksRoadmapExampleModule { }
