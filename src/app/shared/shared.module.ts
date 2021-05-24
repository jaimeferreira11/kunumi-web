import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NopageComponent } from './nopage/nopage.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NopageComponent,


  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NopageComponent,


  ]
})
export class SharedModule { }