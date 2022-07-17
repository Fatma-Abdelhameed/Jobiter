import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/_models/company';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  allowNotifications:boolean = true
  company:Company = new Company(-1, '', '', '', '', '', '', '', 0, '', '', '')
  constructor(public companySer:CompanyService, public token:TokenStorageService) { }

  changeNotificationState(checked:boolean){
    this.companySer.changeNotificationState(this.allowNotifications).subscribe({
      next:(state)=>{
        //this.allowNotifications = state
      }
    })
  }
  ngOnInit(): void {
    this.companySer.getCompanyDetails(this.token.getUser().id).subscribe({
      next:(data)=>{
        this.company = data
      }
    })
    this.companySer.getNotificationState().subscribe({
      next:(state)=>{
        //this.allowNotifications = state
      }
    })
  }

}
