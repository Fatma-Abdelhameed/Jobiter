import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  constructor(public router :Router,public companySer:ApplicantService, public token:TokenStorageService) { }
 
  ngOnInit(): void {
  }
  add(data:any){
    if(data.touched){
      this.companySer.addSalary(this.token.getUser().id, this.formData.company, this.formData.salary,
      this.formData.job_title, this.formData.start_date, this.formData.end_date).subscribe({
        next:()=>{
          
          this.router.navigateByUrl('home')
        },
        error:()=>{

        }
      })
    }
    else{
     
    }
  }

}
