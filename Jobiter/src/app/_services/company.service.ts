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

  constructor(public http: HttpClient) {
   // if(sessionStorage.getItem('auth-user')){
   //   this.token=sessionStorage.getItem('auth-user')
   //    if(this.token.token){
   //       this.token=this.token.token
   //    }
     
   // }
    
   }
   getCompanyDetails(id:number){
      return this.http.get<Company>(`http://127.0.0.1:8000/api/profiles/${id}/show`)
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
   editNameImage(id: number, company_name:string, image:any){
      // if(sessionStorage.getItem('auth-user')){
      //    this.token=sessionStorage.getItem('auth-user')
      //     if(this.token.token){
      //        this.token=this.token.token
      //     }
         
      //  }
      // console.log(sessionStorage.getItem('auth-user'))
       this.token=sessionStorage.getItem('auth-user')
      // console.log('>>>>>>>>>>>>>'+JSON.parse(this.token))
      // if(sessionStorage.getItem('auth')){
      //    console.log('inside iff')
      //    this.token=sessionStorage.getItem('auth-user')
      // }
      // console.log('token ========>>>>>>>'+this.token)
      // let header = new HttpHeaders();
      // header.set('Authorization', 'token 9d19b8cb5464ae4a785f971b641fd686a26edfdf');
      // header.append('Content-Type', 'application/json');
     
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         company_name
         
      }, {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
   }
   editBasicInfo(id: number, address:string, city:string, industry:string, startedAt:string, size:number, websiteLink:string){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         address,
         city,
         industry,
         startedAt,
         size,
         websiteLink
      })
   }
   editAbout(id:number, about:string){
      this.token=sessionStorage.getItem('auth-user')
      return this.http.put(`http://127.0.0.1:8000/api/profiles/${id}/update/`, {
         about
      })
   }
   editJob(id:number, data:{}){
      return this.http.patch(`http://127.0.0.1:8000/api/profiles/${id}/update/`, data)
   }
   getNotificationState(){
      return this.http.get("")
   }
   changeNotificationState(state:boolean){
      return this.http.post("", state)
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
