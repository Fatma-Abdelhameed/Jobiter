import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  formData = {
    company:'',
    salary:1000,
    job_title:'',

    start_date:'',
    end_date:'',

  }
  constructor(public router :Router,public companySer:ApplicantService, public token:TokenStorageService, public route:ActivatedRoute) { }
 
  ngOnInit(): void {
  }
  add(data:any){
    if(data.touched){
      this.companySer.addSalary(this.token.getUser().id, this.formData.company, this.formData.salary,
      this.formData.job_title, this.formData.start_date, this.formData.end_date).subscribe({
        next:()=>{
          
          let id = this.route.snapshot.params['id']
          this.router.navigate([`applicant/company-profile/${id}`])
                },
        error:()=>{

        }
      })
    }
    else{
     
    }
  }

}
