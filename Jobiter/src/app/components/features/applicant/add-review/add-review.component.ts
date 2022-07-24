import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  formData = {
    title:'',
    pros:'',
    cons:'',
    state:'',
    rating:0
  }
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService,public route: Router,public router:ActivatedRoute) { }
  add(form:any){
    if(form.valid){
      console.log(this.formData)

      this.applicantSer.addReview(this.router.snapshot.params['id'],this.formData ).subscribe({
        next:(response)=>{
          console.log("add review>>><<>>",response)
          this.route.navigateByUrl(`applicant/company-profile/${this.router.snapshot.params['id']}`)
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
