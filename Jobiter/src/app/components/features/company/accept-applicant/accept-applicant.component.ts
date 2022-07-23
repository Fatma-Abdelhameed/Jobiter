import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-accept-applicant',
  templateUrl: './accept-applicant.component.html',
  styleUrls: ['./accept-applicant.component.css']
})
export class AcceptApplicantComponent implements OnInit {
  applicantData:any
  constructor(public companySer:CompanyService, public route:ActivatedRoute) { }
  acceptApplicant(){}
  ngOnInit(): void {
    this.companySer.getApplicantDetails(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.applicantData = res
      }
    })
  }

}
