import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  data:any
  allowNotifications:boolean=true
  company:Company = new Company(-1, '', '', '', '', '', '', '', 0, '', '', '',true)
  constructor(public companySer:CompanyService, public token:TokenStorageService) { }

  changeNotificationState(checked:boolean){
    this.companySer.changeNotificationState(this.allowNotifications).subscribe({
      next:(state)=>{
        //this.allowNotifications = JSON.parse(state).allow_notification
      }
    })
  }
  ngOnInit(): void {
    this.companySer.getCompanyDetails(this.token.getUser().id).subscribe({
      next:(data)=>{
        this.company = data
      }
    })
    this.companySer.getNotificationState(this.token.getUser().id).subscribe({
      next:(state)=>{
        // if(state.hasOwnProperty('allow_notification')){
        //   this.allowNotifications=state.allow_notification
        // }
        console.log(state)
        this.data=state
        this.allowNotifications =(this.data).allow_notification
        
        console.log('=============')
        console.log(this.allowNotifications)
      }
    })
  }

}
