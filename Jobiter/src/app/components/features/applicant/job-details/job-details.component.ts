import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { Job } from 'src/app/_models/job';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job:Job = new Job(0, '', '', '', '',0, 0, '') 
  companyDetails:Company = new Company(0, '', '', '', '', '', '', '', 0, '', '', '',true)
  constructor(public applicant:ApplicantService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.applicant.getJobDetails(this.route.params.id).subscribe({
      next:()=>{

      }
    })*/
  }

}
