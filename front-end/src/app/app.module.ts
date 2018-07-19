import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { QuestionnareComponent } from './questionnare/questionnare.component';
import { LoginComponent } from './login/login.component';
import { ResponseService } from './response.service';
import { LocationsComponent } from './locations/locations.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyEditorComponent,
    QuestionnareComponent,
    LoginComponent,
    LocationsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
