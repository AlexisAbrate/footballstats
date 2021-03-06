import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClassementComponent } from './classement/classement.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './teams/team/team.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FixtureComponent } from './fixture/fixture.component';
import { PlayersComponent } from './players/players.component';
import { ChoixChampionnatClassementComponent } from './choix-championnat-classement/choix-championnat-classement.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePipe } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClassementComponent,
    TeamComponent,
    LoginComponent,
    FooterComponent,
    FixtureComponent,
    PlayersComponent,
    ChoixChampionnatClassementComponent,
    CalendarComponent,
    InscriptionComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
