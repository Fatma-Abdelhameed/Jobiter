import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSwitchModule} from 'primeng/inputswitch';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
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
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicantSignUpComponent } from '../applicant-sign-up/applicant-sign-up.component';

const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'job-details/:id', component:JobDetailsComponent},
  {path:'company-profile:id', component:CompanyProfileComponent},
  {path:'edit-basic-info', component:EditBasicInfoComponent},
  {path:'edit-work-experience', component:EditWorkExperienceComponent},
  {path:'change-password', component:ChangePasswordComponent},
  {path:'apply-for-job/:id', component:ApplyForJobComponent},
  {path:'applicant-profile', component:ApplicantProfileComponent},
  {path:'all-companies', component:AllCompaniesComponent},
  {path:'add-review/:id', component:AddReviewComponent},
  {path:'add-salary/:id',component:AddSalaryComponent},
  {path:'add-work-experience', component:AddWorkExperienceComponent},
  {path:'add-interview-questions/:id', component:AddInterviewQuestionsComponent}
]

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
    RouterModule,
    FormsModule,
    RatingModule,
    SidebarModule,
    ButtonModule,
    ChartModule,
    TabViewModule,
    InputSwitchModule
  ],
  exports: [
  ]
})
export class ApplicantModule { }
