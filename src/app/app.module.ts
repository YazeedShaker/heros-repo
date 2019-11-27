import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';

import { LoadingService } from './services/loadingService';
import { EnvironmentService } from './services/environment_variables';
import { HttpService } from './services/httpService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [LoadingService, EnvironmentService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
