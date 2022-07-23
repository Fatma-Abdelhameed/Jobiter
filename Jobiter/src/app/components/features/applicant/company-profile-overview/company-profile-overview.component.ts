import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-company-profile-overview',
  templateUrl: './company-profile-overview.component.html',
  styleUrls: ['./company-profile-overview.component.css']
})
export class CompanyProfileOverviewComponent implements OnInit {
  company:Company = new Company(-1, '', '', '', '', '', '', '', 0, '', '', '',true)
  constructor(public companySer:CompanyService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.companySer.getCompanyDetails(this.route.params.id).subscribe({
      next:(data)=>{
        this.company = data
      }
    })*/
  }

}
