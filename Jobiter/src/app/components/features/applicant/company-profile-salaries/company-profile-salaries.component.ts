import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-company-profile-salaries',
  templateUrl: './company-profile-salaries.component.html',
  styleUrls: ['./company-profile-salaries.component.css']
})
export class CompanyProfileSalariesComponent implements OnInit {
  resData:any
  constructor(public applicantSer:ApplicantService, public route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.applicantSer.getCompanySalaries(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.resData=res
        console.log("=============================",res)
      }
    })
  }
  add(){
    let id = this.route.snapshot.params['id']
    this.router.navigate([`applicant/add-salary/${id}`])
  
  
  }

}
