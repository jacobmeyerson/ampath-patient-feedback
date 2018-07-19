import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';

import { HttpService } from './http.service';
import { LocationsComponent } from './locations/locations.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyEditorComponent,
    QuestionnaireComponent,
    LoginComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
