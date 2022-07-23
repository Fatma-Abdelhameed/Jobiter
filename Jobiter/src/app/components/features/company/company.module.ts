import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { PostNewJobComponent } from './post-new-job/post-new-job.component';
import { RouterModule, Routes } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { DateFilterPipe } from 'src/app/_pipes/date-filter.pipe';
import { SearchPipe } from 'src/app/_pipes/search.pipe';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditCompanyNameImageComponent } from './edit-company-name-image/edit-company-name-image.component';
import { EditCompanyBasicInfoComponent } from './edit-company-basic-info/edit-company-basic-info.component';
import { EditCompanyAboutComponent } from './edit-company-about/edit-company-about.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { JobDetailsComponent } from './job-details/job-details.component';
const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'all-jobs',component:AllJobsComponent},
  {path:'post-new-job',component:PostNewJobComponent},
  {path:'company-profile', component:CompanyProfileComponent},
  {path:'edit-name-image', component:EditCompanyNameImageComponent},
  {path:'edit-company-about', component:EditCompanyAboutComponent},
  {path:'edit-basic-info', component:EditCompanyBasicInfoComponent},
  {path:'edit-job/:id', component:EditJobComponent},
  {path:'employee-profile/:id', component:EmployeeProfileComponent},
  {path:'job-details/:id', component:JobDetailsComponent},
]
@NgModule({
  declarations: [
    AllJobsComponent,
    PostNewJobComponent,
    DateFilterPipe,
    SearchPipe,
    CompanyProfileComponent,
    ChangePasswordComponent,
    EditCompanyNameImageComponent,
    EditCompanyBasicInfoComponent,
    EditCompanyAboutComponent,
    EditJobComponent,
    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    TabViewModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    ConfirmPopupModule,
    PaginatorModule,
    TableModule,
    InputSwitchModule

  ],
  exports: [EmployeeProfileComponent, AllJobsComponent]
})
export class CompanyModule { }
