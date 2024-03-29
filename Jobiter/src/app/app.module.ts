import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/features/sign-up/sign-up.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { LoginComponent } from './components/features/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyModule } from './components/features/company/company.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicantSignUpComponent } from './components/features/applicant-sign-up/applicant-sign-up.component';
import { ApplicantModule } from './components/features/applicant/applicant.module';
import { HomeComponent } from './components/features/applicant/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavbarComponent,
    LoginComponent,
    ApplicantSignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CompanyModule,
    RouterModule,
    ApplicantModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent,]
})
export class AppModule { }
