import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-work-experience',
  templateUrl: './edit-work-experience.component.html',
  styleUrls: ['./edit-work-experience.component.css']
})
export class EditWorkExperienceComponent implements OnInit {
  formData = {
    jobTitle:'',
    companyName:'',
    startDate:'',
    endDate:'',
  }
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService) { }
  saveChanges(form:any){
    this.applicantSer.editWorkExperience(this.token.getUser().id, this.formData).subscribe()
  }
  ngOnInit(): void {
    this.applicantSer.getWorkExperience(this.token.getUser().id).subscribe({
      next:(exp)=>{
        /*this.formData.jobTitle = exp.jobTitle
        this.formData.companyName = exp.companyName
        this.formData.startDate = exp.startDate
        this.formData.endDate = exp.endDate*/
      }
    })
  }

}
