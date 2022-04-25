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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClassementComponent,
    TeamComponent,
    LoginComponent,
    FooterComponent,
    FixtureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
