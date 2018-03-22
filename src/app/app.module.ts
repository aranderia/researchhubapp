import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterprojectComponent } from './registerproject/registerproject.component';
import {DataService} from './data.service';
import { ViewprojectComponent } from './viewproject/viewproject.component'


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'homepage', component: HomepageComponent },
  {path: 'register', component: RegisterprojectComponent },
  {path: 'project/:id', component: ViewprojectComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterprojectComponent,
    ViewprojectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
