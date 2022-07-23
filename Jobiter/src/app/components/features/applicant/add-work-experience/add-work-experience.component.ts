import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.component.html',
  styleUrls: ['./add-work-experience.component.css']
})
export class AddWorkExperienceComponent implements OnInit {
  formData = {
    jobTitle:'',
    companyName:'',
    startDate:'',
    endDate:'',
  }
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService) { }
  addExp(form:any){
    if(form.valid){
      this.applicantSer.addWorkExperience(this.token.getUser().id, this.formData).subscribe()
    }
  }
  ngOnInit(): void {
  }

}
