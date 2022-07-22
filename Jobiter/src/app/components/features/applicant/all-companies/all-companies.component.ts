import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/_models/company';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {
  keyWord:string = ''
  rating:number = 4
  companies:Company[] = []
  constructor(public comps:ApplicantService) { }

  ngOnInit(): void {
    this.comps.getAllCompanies().subscribe({
      next:(company)=>{
        //this.companies.push(new Company(company.id, company.companyName,)) 
      }
    })
  }

}
