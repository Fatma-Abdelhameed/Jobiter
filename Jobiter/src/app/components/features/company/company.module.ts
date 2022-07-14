import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { PostNewJobComponent } from './post-new-job/post-new-job.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllJobsComponent,
    PostNewJobComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
