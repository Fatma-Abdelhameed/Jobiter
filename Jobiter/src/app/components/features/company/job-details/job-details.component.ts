import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ConfirmationService} from "primeng/api";

import { Company } from 'src/app/_models/company';
import { Job } from 'src/app/_models/job';

import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  providers: [ConfirmationService]
})
export class JobDetailsComponent implements OnInit {

  jobDetails:Job = new Job(-1,'','','','','','','',0,'')
  companyDetails:Company = new Company(-1, '', '', '', '', '', '', '', 0, '', '', '', true)

  applicants=[]

  resData:any
  app:any
  constructor(public confirmationService: ConfirmationService, private router:Router ,public companySer:CompanyService, public route:ActivatedRoute) { }

  ngOnInit(): void {

    this.companySer.getJobDetails(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.resData = res
        this.jobDetails.title=this.resData.job_title
        this.jobDetails.level = this.resData.level
        this.jobDetails.requirements=this.resData.Description
        this.jobDetails.state=this.resData.state
        this.jobDetails.status=this.resData.job_type
        this.jobDetails.postedDate=this.resData.created_at
        this.jobDetails.workType=this.resData.work_type
        this.jobDetails.salary=this.resData.salary
        this.jobDetails.id=this.resData.id


      }
    })


    this.companySer.getJobApplicants(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.app = res
        this.applicants = this.app
        console.log(">>>",this.applicants)
      }
    })

  }
  confirm(event:any) {
    // this.confirmationService.confirm({
    //   target: event.target,
    //   message: 'Are you sure that you want to close this job?',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.companySer.closeJob(this.route.snapshot.params['id'],{}).subscribe(
    //       (res)=>{
    //         console.log(res)
    //       }
    //     )
    //   },
    //   reject: () => {}
    // });
    
    this.companySer.closeJob(this.route.snapshot.params['id'],{}).subscribe(
      (response)=>{
        console.log(response)
        window.location.href=`company/job-details/${this.route.snapshot.params['id']}`
      }

    )
  }
  accept(id:number){
    console.log("empid>>>>>>>",id)
    this.companySer.acceptApplicant(id, this.route.snapshot.params['id']).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
  viewProfile(id:number){
    this.router.navigate([`applicant/company-profile/${id}`])

  }
  Onedit(id:number){
    this.router.navigate([`company/edit-job/${id}`])

  }
}
