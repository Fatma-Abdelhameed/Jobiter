import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './authorized.guard';
import { ApplicantSignUpComponent } from './components/features/applicant-sign-up/applicant-sign-up.component';
import { AddInterviewQuestionsComponent } from './components/features/applicant/add-interview-questions/add-interview-questions.component';
import { AddReviewComponent } from './components/features/applicant/add-review/add-review.component';
import { AddSalaryComponent } from './components/features/applicant/add-salary/add-salary.component';
import { AddWorkExperienceComponent } from './components/features/applicant/add-work-experience/add-work-experience.component';
import { AllCompaniesComponent } from './components/features/applicant/all-companies/all-companies.component';
import { ApplicantProfileComponent } from './components/features/applicant/applicant-profile/applicant-profile.component';
import { ApplyForJobComponent } from './components/features/applicant/apply-for-job/apply-for-job.component';
import { ChangePasswordComponent } from './components/features/applicant/change-password/change-password.component';
import { CompanyProfileComponent } from './components/features/applicant/company-profile/company-profile.component';
import { EditBasicInfoComponent } from './components/features/applicant/edit-basic-info/edit-basic-info.component';
import { EditWorkExperienceComponent } from './components/features/applicant/edit-work-experience/edit-work-experience.component';
import { HomeComponent } from './components/features/applicant/home/home.component';
import { JobDetailsComponent } from './components/features/applicant/job-details/job-details.component';
import { LoginComponent } from './components/features/login/login.component';
import { SignUpComponent } from './components/features/sign-up/sign-up.component';





const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'company-sign-up',component:SignUpComponent},
  {path:'applicant-signup',component:ApplicantSignUpComponent},
  {
    path:'company',
    loadChildren: ()=>import('./components/features/company/company.module').then(m=>m.CompanyModule)
    //canActivate:[AuthorizedGuard]
  },
  {
    path:'applicant',
    loadChildren: ()=>import('./components/features/applicant/applicant.module').then(m=>m.ApplicantModule),
    //canActivate:[AuthorizedGuard]
  },
  {path:'applicant', component:HomeComponent},
  {path:'applicant/job-details/:id', component:JobDetailsComponent},
  {path:'applicant/company-profile:id', component:CompanyProfileComponent},
  {path:'applicant/edit-basic-info', component:EditBasicInfoComponent},
  {path:'applicant/edit-work-experience', component:EditWorkExperienceComponent},
  {path:'applicant/change-password', component:ChangePasswordComponent},
  {path:'applicant/apply-for-job/:id', component:ApplyForJobComponent},
  {path:'applicant/applicant-profile', component:ApplicantProfileComponent},
  {path:'applicant/all-companies', component:AllCompaniesComponent},
  {path:'applicant/add-review/:id', component:AddReviewComponent},
  {path:'applicant/add-salary/:id',component:AddSalaryComponent},
  {path:'applicant/add-work-experience', component:AddWorkExperienceComponent},
  {path:'applicant/add-interview-questions/:id', component:AddInterviewQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
