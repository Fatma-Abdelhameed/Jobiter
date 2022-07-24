import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
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
    starting_date:0,
    cover_letter:''
  }
  dataApplied:boolean = false
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService,public route: Router,public router:ActivatedRoute) { }
  apply(form:any){
    if(form.valid){
      this.applicantSer.applyForJob(this.router.snapshot.params['id'], this.formData.yearsOfExp, this.formData.cv,
       this.formData.cover_letter,this.formData.starting_date).subscribe({
        next:(response)=>{
          this.dataApplied = true
          console.log("Applieedd>>><<>>",response)
        },
        error:(er)=>{
          console.log(er)

        }
      })
    }
  }
  ngOnInit(): void {
  }

}
