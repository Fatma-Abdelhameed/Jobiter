import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { PostNewJobComponent } from './post-new-job/post-new-job.component';
import { RouterModule, Routes } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { DateFilterPipe } from 'src/app/_pipes/date-filter.pipe';
import { SearchPipe } from 'src/app/_pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'all-jobs',component:AllJobsComponent},
  {path:'post-new-job',component:PostNewJobComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    AllJobsComponent,
    PostNewJobComponent,
    DateFilterPipe,
    SearchPipe,
    CompanyProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    PaginatorModule,
    TableModule,
    InputSwitchModule
    
  ],
  exports:[ChangePasswordComponent]
})
export class CompanyModule { }
