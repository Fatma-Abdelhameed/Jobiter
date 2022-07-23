import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConfirmationService} from "primeng/api";
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  providers: [ConfirmationService]
})
export class JobDetailsComponent implements OnInit {
  applicants=[]
  resData:any
  constructor(public confirmationService: ConfirmationService, public companySer:CompanyService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.companySer.getJobApplicants(this.route.snapshot.params['id']).subscribe({
      next:(res)=>{
        this.resData = res
        this.applicants = this.resData.applicants
      }
    })
  }
  confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this job?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {},
      reject: () => {}
    });
  }
}
