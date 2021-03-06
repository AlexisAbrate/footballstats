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
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChoixChampionnatClassementComponent } from './choix-championnat-classement/choix-championnat-classement.component';
import { PlayersComponent } from './players/players.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path: 'todaymatch', component: HomeComponent},
  {path: 'classement/:id', component: ClassementComponent},
  {path: 'team/:id', component : TeamComponent},
  {path: 'login', component : LoginComponent},
  {path: 'fixture/:team1/:team2/:id', component : FixtureComponent},
  {path: 'choixchamp', component: ChoixChampionnatClassementComponent},
  {path: 'calendar/:id/:journee/:season', component: CalendarComponent},
  {path: 'players/:id', component: PlayersComponent},
  {path: '', component: AcceuilComponent},
  {path: 'inscription', component: InscriptionComponent}
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
