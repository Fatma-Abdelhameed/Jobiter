import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { PostNewJobComponent } from './post-new-job/post-new-job.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'all-jobs',component:AllJobsComponent},
  {path:'post-new-job',component:PostNewJobComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    AllJobsComponent,
    PostNewJobComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CompanyModule { }
