import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";//para hacer uso del banana in a box

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CasaService } from './provider/casa.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeGuard } from './guards/backoffice.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    BackofficeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CasaService,
    BackofficeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
