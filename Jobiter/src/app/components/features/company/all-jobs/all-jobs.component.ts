import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Job } from 'src/app/_models/job';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css'],
  providers: [ConfirmationService]
})
export class AllJobsComponent implements OnInit {
  allJobs:Job[] = []
  deletedRecordAlert:boolean = false
  dateValue:Date = new Date()
  selectedDate:any
  keyWord:string = ''
  constructor(public confirmationService: ConfirmationService, public company: CompanyService) { }
  
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
  }

}
