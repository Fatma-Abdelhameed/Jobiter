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
   editJob(id:number, data:{}){
      return this.http.patch(`http://127.0.0.1:8000/api/profiles/${id}/update/`, data)
   }
   getNotificationState(id:number){
      return this.http.get(`http://127.0.0.1:8000/api/profiles/${id}/show/`)
   }
   changeNotificationState(state:boolean){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.post(`http://127.0.0.1:8000/api/profiles/allow_notifications/`, state,
      {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)}
      )
   }
   getAllJobs(companyId:number){
      return this.http.get(`http://127.0.0.1:8000/api/jobs/`, {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
   deleteJob(jobId:number){
      return this.http.get(`http://127.0.0.1:8000/api/jobs/`)
   }
   getJobDetails(jobId:number){
      return this.http.get("")
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
   getJobApplicants(id:number){
      return this.http.get("")
   }
   getApplicantDetails(id:number){
      return this.http.get("")
   }
   acceptApplicant(id:number){
      
   }
}
