import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import { JobDetailsComponent } from './job-details/job-details.component';



@NgModule({
  declarations: [
    AllCompaniesComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  exports:[JobDetailsComponent]
})
export class ApplicantModule { }
