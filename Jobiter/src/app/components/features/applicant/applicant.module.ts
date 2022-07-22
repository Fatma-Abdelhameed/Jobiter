import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { EditBasicInfoComponent } from './edit-basic-info/edit-basic-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    AllCompaniesComponent,
    JobDetailsComponent,
    ApplyForJobComponent,
    ApplicantProfileComponent,
    EditBasicInfoComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    InputSwitchModule
  ],
  exports:[ChangePasswordComponent]
})
export class ApplicantModule { }
