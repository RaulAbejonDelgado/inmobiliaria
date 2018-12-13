import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { BackofficeGuard } from './guards/backoffice.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'backoffice', component: BackofficeComponent, canActivate:[BackofficeGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
