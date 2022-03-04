import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminauthComponent } from './adminauth/adminauth.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CreatmaterielComponent } from './creatmateriel/creatmateriel.component';
import {HttpClientModule} from '@angular/common/http'
import { MateService } from './mate.service';
import { ReadmaterielComponent } from './readmateriel/readmateriel.component';
import { CreatefichepComponent } from './ficheprojet/createfichep/createfichep.component';
import { ListefichepComponent } from './ficheprojet/listefichep/listefichep.component';
import { DetailficheComponent } from './ficheprojet/detailfiche/detailfiche.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminauthComponent,
    DashboardComponent,
    ForbiddenComponent,
    CreatmaterielComponent,
    ReadmaterielComponent,
    CreatefichepComponent,
    ListefichepComponent,
    DetailficheComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
