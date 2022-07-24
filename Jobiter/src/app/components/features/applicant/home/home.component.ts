import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService],
 

})
export class HomeComponent implements OnInit {
  allJobs:any[] = []
  resData:any
  deletedRecordAlert:boolean = false
  dateValue:Date = new Date()
  selectedDate:any
  keyWord:string = ''
  constructor(public confirmationService: ConfirmationService, private router: Router, public appServ: ApplicantService, public token:TokenStorageService) { }
  
  display:boolean = false;
  ngOnInit(): void {
    this.appServ.getAllCompanies().subscribe(
      (res)=>{
        console.log(res)
        this.allJobs.push(res)
        console.log('here>>>',this.allJobs[0][0].job_title)

      }
    )  }

}
