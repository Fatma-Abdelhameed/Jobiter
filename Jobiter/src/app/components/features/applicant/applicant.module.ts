import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {ChartModule} from 'primeng/chart';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { ApplicantProfileComponent } from './applicant-profile/applicant-profile.component';
import { EditBasicInfoComponent } from './edit-basic-info/edit-basic-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddWorkExperienceComponent } from './add-work-experience/add-work-experience.component';
import { EditWorkExperienceComponent } from './edit-work-experience/edit-work-experience.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyProfileOverviewComponent } from './company-profile-overview/company-profile-overview.component';
import { CompanyProfileReviewsComponent } from './company-profile-reviews/company-profile-reviews.component';
import { CompanyProfileSalariesComponent } from './company-profile-salaries/company-profile-salaries.component';
import { CompanyProfileJobsComponent } from './company-profile-jobs/company-profile-jobs.component';
import { CompanyProfileInterviewQuestionsComponent } from './company-profile-interview-questions/company-profile-interview-questions.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { AddInterviewQuestionsComponent } from './add-interview-questions/add-interview-questions.component';



@NgModule({
  declarations: [
    AllCompaniesComponent,
    JobDetailsComponent,
    ApplyForJobComponent,
    ApplicantProfileComponent,
    EditBasicInfoComponent,
    ChangePasswordComponent,
    AddWorkExperienceComponent,
    EditWorkExperienceComponent,
    CompanyProfileComponent,
    CompanyProfileOverviewComponent,
    CompanyProfileReviewsComponent,
    CompanyProfileSalariesComponent,
    CompanyProfileJobsComponent,
    CompanyProfileInterviewQuestionsComponent,
    AddReviewComponent,
    AddSalaryComponent,
    AddInterviewQuestionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    ChartModule,
    InputSwitchModule
  ],
  exports: [CompanyProfileInterviewQuestionsComponent]
})
export class ApplicantModule { }
