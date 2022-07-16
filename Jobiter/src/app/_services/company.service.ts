import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../_models/job';

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
   postNewJob(title:string, level:string, type:string,
     minExperience:number, maxExperience:number, requirements:string){
    return this.http.post("", {
      title,
      level,
      type,
      minExperience,
      maxExperience,
      requirements
    })
   }

}
