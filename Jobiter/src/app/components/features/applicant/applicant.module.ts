import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';



@NgModule({
  declarations: [
    AllCompaniesComponent,
    JobDetailsComponent,
    ApplyForJobComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  exports:[ApplyForJobComponent]
})
export class ApplicantModule { }
