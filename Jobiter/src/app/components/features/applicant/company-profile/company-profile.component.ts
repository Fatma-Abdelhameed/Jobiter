import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  companyDetails:Company = new Company(-1, '', '', '', '','', '', '', 0, '', '', '', false)
  resData:any
  rating = 4
  constructor(public applicantSer:ApplicantService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.applicantSer.getCompanyOverview(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.resData = res
        this.companyDetails = this.resData
        //this.companyDetails.getRating() = 
      }
    })
  }

}
