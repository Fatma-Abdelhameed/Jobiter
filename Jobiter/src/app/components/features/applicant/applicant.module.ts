import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { HomeComponent } from './home/home.component';
import {CalendarModule} from "primeng/calendar";
import {SidebarModule} from "primeng/sidebar";



@NgModule({
  declarations: [
    AllCompaniesComponent,
    JobDetailsComponent,
    ApplyForJobComponent,
    ApplicantProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    InputSwitchModule,
    CalendarModule,
    SidebarModule
  ],
  exports: [ApplicantProfileComponent, AllCompaniesComponent, HomeComponent]
})
export class ApplicantModule { }
