import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementComponent } from './classement/classement.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './teams/team/team.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FixtureComponent } from './fixture/fixture.component';
import { ChoixChampionnatService } from './service/choix-championnat.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ChoixChampionnatClassementComponent } from './choix-championnat-classement/choix-championnat-classement.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'classement/:id', component: ClassementComponent},
  {path: 'team/:id', component : TeamComponent},
  {path: 'login', component : LoginComponent},
  {path: 'fixture/:id', component : FixtureComponent},
  {path: 'choixchamp', component: ChoixChampionnatClassementComponent},
  {path: 'calendar/:id/:journee/:season', component: CalendarComponent},
  {path: 'players/:id', component: PlayersComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      BrowserModule,
      HttpClientModule,
      FormsModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
