import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/student/register/register.component';
import { LoginComponent } from './components/student/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/student/dashboard/dashboard.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AuthGuard2 } from './guards/auth2.guard'
import { TloginComponent } from './components/teacher/tlogin/tlogin.component';
import { TregisterComponent } from './components/teacher/tregister/tregister.component';
import { TdashboardComponent } from './components/teacher/tdashboard/tdashboard.component';
import { AlgoComponent } from './components/teacher/tquiz/algo/algo.component';
import { ResultComponent } from './components/student/result/result.component';
import { SoftwareComponent } from './components/teacher/tquiz/software/software.component';
import { JavaComponent } from './components/teacher/tquiz/java/java.component';
import { StudentalgoComponent } from './components/student/studentalgo/studentalgo.component';
import { StudentsoftwareComponent } from './components/student/studentsoftware/studentsoftware.component';
import { StudentjavaComponent } from './components/student/studentjava/studentjava.component';



const appRoutes: Routes = [
  {path: "", component: HomeComponent},
 
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "tregister", component: TregisterComponent},
  {path: "tlogin", component: TloginComponent},
  {path: "tdashboard", component: TdashboardComponent, canActivate:[AuthGuard2]},
  {path: "algo", component: AlgoComponent, canActivate:[AuthGuard2]},
  {path: "result", component: ResultComponent, canActivate:[AuthGuard]},
  {path: "software", component: SoftwareComponent, canActivate:[AuthGuard2]},
  {path: "java", component: JavaComponent, canActivate:[AuthGuard2]},
  {path: "studentalgo", component: StudentalgoComponent, canActivate:[AuthGuard]},
  {path: "studentsoftware", component: StudentsoftwareComponent, canActivate:[AuthGuard]},
  {path: "studentjava", component: StudentjavaComponent, canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
   
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TloginComponent,
    TregisterComponent,
    DashboardComponent,
    TdashboardComponent,
    AlgoComponent,
    ResultComponent,
    SoftwareComponent,
    JavaComponent,
    StudentalgoComponent,
    StudentsoftwareComponent,
    StudentjavaComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ReactiveFormsModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, AuthGuard2],
  bootstrap: [AppComponent]
})
export class AppModule { }
