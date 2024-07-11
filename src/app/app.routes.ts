import { Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.gurd';

export const routes: Routes = [
  {
    path:"account",
    // canActivate: [AuthGuard],
    loadChildren:
    ()=> import('./login-accounts/login-accounts.module').then(a => a.LoginAccountsModule)
  },
  {
    path:"",
    canActivate: [AuthGuard],
    loadComponent: ()=> import('./common/dashboard/dashboard.component').then(a => a.DashboardComponent)
  }
];
