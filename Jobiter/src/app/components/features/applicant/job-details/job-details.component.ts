import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { Job } from 'src/app/_models/job';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobDetails:Job = new Job(-1,'','','','','','','',0,'')
  companyDetails:Company = new Company(0, '', '', '', '', '', '', '', 0, '', '', '',true)
  resData:any

  constructor(public applicant:ApplicantService, public route: Router,public router:ActivatedRoute) { }

  ngOnInit(): void {
    this.applicant.getJobDetails(this.router.snapshot.params['id']).subscribe(
     (res)=>{
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
    )
  }
  apply(id:number){
    this.route.navigate([`applicant/apply-for-job/${id}`])

  }

}
