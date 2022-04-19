import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementComponent } from './classement/classement.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './teams/team/team.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'classement', component: ClassementComponent},
  {path: 'team/:id', component : TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
