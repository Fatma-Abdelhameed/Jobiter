import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-company-profile-jobs',
  templateUrl: './company-profile-jobs.component.html',
  styleUrls: ['./company-profile-jobs.component.css']
})
export class CompanyProfileJobsComponent implements OnInit {
resData:any
  constructor(public applicantSer:ApplicantService, public route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log("HEREE")
    this.applicantSer.getCompanyJobs(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.resData = res
        console.log("ALLJOBBSSS33333333",res)
      }
    })
  }
  apply(id:number){
    this.router.navigate([`applicant/apply-for-job/${id}`])

  }
  details(id:number){
    this.router.navigate([`applicant/job-details/${id}`])
  }

}
