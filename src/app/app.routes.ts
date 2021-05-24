import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { TerminosComponent } from './terminos/terminos.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terms', component: TerminosComponent },
  { path: 'privacity', component: PoliticasComponent },



  { path: '**', component: HomeComponent }

];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
