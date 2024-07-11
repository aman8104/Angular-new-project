import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseAppModule } from '@angular/fire/app';
import { LoginComponent } from './login/login.component';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {path: "login", component: LoginComponent}
    ],
  },
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FirebaseAppModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginAccountsModule { }
