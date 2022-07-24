import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/_models/developer';
import { WorkExperience } from 'src/app/_models/work-experience';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {
  allowNotifications:boolean = false
  applicantDetails:Developer = new Developer(0, '', '', '', '', '', '', '', '', '', '', '')
  applicantWorkExperience:WorkExperience[] = []
  constructor(public token:TokenStorageService, public applicantSer:ApplicantService) { }
  changeNotificationState(state:boolean){
    this.applicantSer.changeNotificationsState(this.token.getUser().id, state).subscribe({
      next:()=>{
        
      }
    })
  }
  delete(id:number){
    this.applicantSer.deleteWorkExperience(id).subscribe({
      next:()=>{

      },
      error:()=>{

      }
    })
  }
  ngOnInit(): void {
    this.applicantSer.getNotificationState(this.token.getUser().id).subscribe({
      next:(state)=>{
        //this.allowNotifications = state
      }
    })
    this.applicantSer.getProfileDetails(this.token.getUser().id).subscribe({
      next:(profile)=>{
        //this.applicantDetails = profile
      }
    })
    this.applicantSer.getWorkExperience(this.token.getUser().id).subscribe({
      next:(exp)=>{
        //this.applicantWorkExperience = exp
      }
    })
  }

}
