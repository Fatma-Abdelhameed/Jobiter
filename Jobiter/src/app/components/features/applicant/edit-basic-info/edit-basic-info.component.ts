import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.component.html',
  styleUrls: ['./edit-basic-info.component.css']
})
export class EditBasicInfoComponent implements OnInit {
  noChangesError:boolean = false
  dataUpdated:boolean = false
  formData = {
    username:'',
    jobTitle:'',
    city:'',
    phone:'',
    level:'',
    faculty:'',
    dateOfBirth:'',
    gender:'',
    cv:''
  }
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService) { }
  saveChanges(form:any){
    if(form.valid){
      this.applicantSer.editBasicInfo(this.token.getUser().id, this.formData).subscribe()
    }
  }
  ngOnInit(): void {
    this.applicantSer.getProfileDetails(this.token.getUser().id).subscribe({
      next:(info)=>{
        /*this.formData.username = info.username
        this.formData.jobTitle = info.jobTitle
        this.formData.city = info.city
        this.formData.phone = info.phone
        this.formData.level = info.level
        this.formData.faculty = info.faculty
        this.formData.dateOfBirth = info.dateOfBirth
        this.formData.gender = info.gender
        this.formData.cv = info.cv*/
      }
    })
  }

}
