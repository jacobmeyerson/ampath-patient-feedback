import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ClinicTypeComponent } from './clinic-type/clinic-type.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'location', component: LocationsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'clinic', component: ClinicTypeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'survey', component: QuestionnaireComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
