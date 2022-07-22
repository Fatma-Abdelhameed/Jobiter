import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.css']
})
export class ApplyForJobComponent implements OnInit {
  formData = {
    yearsOfExp:0,
    cv:'',
    starting_date:'',
    cover_letter:''
  }
  dataApplied:boolean = false
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService) { }
  apply(form:any){
    if(form.valid){
      this.applicantSer.applyForJob(this.token.getUser().id, this.formData.yearsOfExp, this.formData.cv,
      this.formData.starting_date, this.formData.cover_letter).subscribe({
        next:(response)=>{
          this.dataApplied = true
        },
        error:()=>{

        }
      })
    }
  }
  ngOnInit(): void {
  }

}
