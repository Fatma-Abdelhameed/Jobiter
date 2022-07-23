import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-company-profile-overview',
  templateUrl: './company-profile-overview.component.html',
  styleUrls: ['./company-profile-overview.component.css']
})
export class CompanyProfileOverviewComponent implements OnInit {
  companyDetails:Company = new Company(-1, '', '', '', '','', '', '', 0, '', '', '', false)
  resData:any
  constructor(public applicantSer:ApplicantService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.applicantSer.getCompanyOverview(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.resData = res
        this.companyDetails = this.resData
      }
    })
  }
}
