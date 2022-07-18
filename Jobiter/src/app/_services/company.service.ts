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
   /*saveProfileChanges(id:number, name:string, imageUrl:string, email:string, password:string,
      startedAt:string, size:number, phone:string, address:string, industry:string, link:string,
       about:string){
         return this.http.put("", {})

   }*/
   changePassword(id:number, password:string, confirmPassword:string){
      return this.http.patch("", {
         password,
         confirmPassword
      })
   }
   editNameImage(id: number, name:string, imageUrl:string){
      return this.http.patch("", {
         name,
         imageUrl
      })
   }
   editBasicInfo(id: number, address:string, city:string, industry:string, startedAt:string, size:number, websiteLink:string){
      return this.http.patch("", {
         address,
         city,
         industry,
         startedAt,
         size,
         websiteLink
      })
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
