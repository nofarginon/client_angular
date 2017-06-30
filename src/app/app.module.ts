import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { BygenerComponent } from './bygener/bygener.component';
import { ByratingComponent } from './byrating/byrating.component';

import { seriesDb } from "./service/seriesDb";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    BygenerComponent,
    ByratingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  seriesDb
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
