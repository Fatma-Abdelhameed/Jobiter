import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public http: HttpClient) {
    
   }
   getAllJobs(companyId:number){

   }
   deleteJob(jobId:number){

   }
   showJob(jobId:number){

   }

}
