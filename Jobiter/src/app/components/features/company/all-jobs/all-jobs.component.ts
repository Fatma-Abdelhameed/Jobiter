import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import { Job } from 'src/app/_models/job';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css'],
  providers: [ConfirmationService],
  
})
export class AllJobsComponent implements OnInit {
  allJobs:any[] = []
  resData:any
  deletedRecordAlert:boolean = false
  dateValue:Date = new Date()
  selectedDate:any
  keyWord:string = ''
  constructor(public confirmationService: ConfirmationService, private router: Router, public companySer: CompanyService, public token:TokenStorageService) { }
  
  confirm(event: any, id:number) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure that you want to selete this job?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.allJobs.splice(id, 1)
            this.deletedRecordAlert = true
        },
        reject: () => {
            //reject action
        }
    });
  }
  ngOnInit(): void {
    this.companySer.getAllJobs(this.token.getUser().id).subscribe(
      (res)=>{
        console.log(res)
        this.allJobs.push(res)
        console.log('>>>',this.allJobs[0])

      }
    )
  }
  details(id:number) {
    this.router.navigate([`company/job-details/${id}`])
  }

}
