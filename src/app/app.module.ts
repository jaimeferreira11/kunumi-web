import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { FaqComponent } from './components/faq/faq.component';
import { VideoComponent } from './components/video/video.component';
import { TeamComponent } from './components/team/team.component';
import { DownloadappComponent } from './components/downloadapp/downloadapp.component';
import { LogrosComponent } from './components/logros/logros.component';
import { SumateComponent } from './components/sumate/sumate.component';
import { ColaborarComponent } from './components/colaborar/colaborar.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MailService } from './services/mail.service';
import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    AboutComponent,
    FeaturesComponent,
    ScreenshotsComponent,
    FaqComponent,
    VideoComponent,
    TeamComponent,
    DownloadappComponent,
    LogrosComponent,
    SumateComponent,
    ColaborarComponent,
    ContadorComponent,
    ContactoComponent,
    TerminosComponent,
    PoliticasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PipesModule,
    FontAwesomeModule

  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
