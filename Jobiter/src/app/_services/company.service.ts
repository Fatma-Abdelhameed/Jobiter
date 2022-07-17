import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../_models/company';
import { Job } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public http: HttpClient) {
    
   }
   getCompanyDetails(id:number){
      return this.http.get<Company>("")
   }
   getNotificationState(){
      return this.http.get("")
   }
   changeNotificationState(state:boolean){
      return this.http.post("", state)
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
