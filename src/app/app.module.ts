import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FotterComponent } from './fotter/fotter.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { VisionPageComponent } from './vision-page/vision-page.component';
import { PrizeComponent } from './prize/prize.component';
import { MainComponent } from './main/main.component';
import { WinnerComponent } from './prize/winner/winner.component';
import { MessageComponent } from './main/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './main/message/template/template.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FotterComponent,
    HomePageComponent,
    ErrorPageComponent,
    AboutPageComponent,
    VisionPageComponent,
    PrizeComponent,
    MainComponent,
    WinnerComponent,
    MessageComponent,
    TemplateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
