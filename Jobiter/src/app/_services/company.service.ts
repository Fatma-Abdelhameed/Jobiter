import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../_models/company';
import { Job } from '../_models/job';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse} from "@angular/common/http";
import {  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
token:any

  constructor(public http: HttpClient) {}

   getCompanyDetails(id:number){
      return this.http.get<Company>(`http://127.0.0.1:8000/api/profiles/${id}/show`)
   }
  
      
   changePassword(id:number, password:string){
      this.token=sessionStorage.getItem('auth-user')
      console.log(JSON.parse(this.token).token)
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         password,
         
      },{headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
      
   }

   editNameImage(id: number, company_name:string, image:any){
       this.token=sessionStorage.getItem('auth-user')
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         company_name
      }, {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }

   editBasicInfo(id: number, address:string, city:string, industry:string, startedAt:string, size:number, website:string){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         address,
         city,
         industry,
         startedAt,
         size,
         website,
      },{headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
   editAbout(id:number, about:string){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         about },{headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
  
   getNotificationState(id:number){
      return this.http.get(`http://127.0.0.1:8000/api/profiles/${id}/show/`)
   }
   changeNotificationState(state:boolean){
      this.token=sessionStorage.getItem('auth-user')
      console.log("notify>>>")
      return this.http.post(`http://127.0.0.1:8000/api/profiles/allow_notifications/`, state,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)}
      )
   }
   getAllJobs(companyId:number){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.get(`http://127.0.0.1:8000/api/jobs/company_jobs/`,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
   postNewJob(job_title:string, level:string, work_type:string,
      job_type:String, Description:string,salary:String){
     this.token=sessionStorage.getItem('auth-user')
     return this.http.post("http://127.0.0.1:8000/api/jobs/create/", {
       job_title,
       level,
       Description,
       job_type,
       work_type,
       salary
     },{headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
   getJobDetails(jobId:number){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.get(`http://127.0.0.1:8000/api/jobs/${jobId}`,    
        {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)}
      )
   }
   editJob(id:number, data:{}){
      this.token=sessionStorage.getItem('auth-user')
      console.log('>>>>>',data)
      return this.http.put(`http://127.0.0.1:8000/api/jobs/${id}/`, data,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
   deleteJob(jobId:number){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.delete(`http://127.0.0.1:8000/api/jobs/${jobId}/`,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)}
      )
   }




   closeJob(jobId:number,data:any){
      
      this.token=sessionStorage.getItem('auth-user')
      console.log('confirm======= ',jobId)
      
      return this.http.post(`http://127.0.0.1:8000/api/jobs/${jobId}/close/`,data,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
     
      
   }

 


   getJobApplicants(id:number){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.get(`http://127.0.0.1:8000/api/jobs/${id}/applied_employees`,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
      }
   getApplicantDetails(id:number){
      return this.http.get("")
   }
   acceptApplicant(user_id:number,job_id:number){
      console.log('userid---======',user_id)
      this.token=sessionStorage.getItem('auth-user')
      return this.http.post(`http://127.0.0.1:8000/api/jobs/${job_id}/applied_employees/accept_employee/`, {'id':user_id},
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})   }

}

