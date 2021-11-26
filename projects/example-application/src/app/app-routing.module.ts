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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
