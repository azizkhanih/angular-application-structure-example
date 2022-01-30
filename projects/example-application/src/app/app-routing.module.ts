import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLayoutComponent } from './layout/account/account-layout.component';
import { MainLayoutComponent } from './layout/main/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountLayoutComponent,
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dynamicform',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/dynamic-form-example/dynamic-form-example.module').then((m) => m.DynamicFormExampleModule),
  },
  {
    path: 'tasksroadmap',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/tasks-roadmap-example/tasks-roadmap-example.module').then((m) => m.TasksRoadmapExampleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
