import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { QuestionnareComponent } from './questionnare/questionnare.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes=[
  {
    
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    
    path:'survey', component: QuestionnareComponent
  },
  {
    
    path:'location', component: LocationsComponent
  },
  {
    
    path:'home', component: HomeComponent
  },
  {
    
    path:'login', component: LoginComponent
  },
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
