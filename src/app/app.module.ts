import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from '../core/wrappers/home/home.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { HeaderComponent } from './../core/components/header/header.component';

import { HeaderModule } from 'header-components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
