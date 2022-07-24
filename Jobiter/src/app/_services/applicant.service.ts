import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  token:any

  constructor(public http:HttpClient) { }
  getCities(){
    return this.http.get("")
  }
  getAllCompanies(){
    this.token=sessionStorage.getItem('auth-user')
    return this.http.get(`http://127.0.0.1:8000/api/jobs/all_jobs/`,
    {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})  }
  getJobDetails(id:number){
    this.token=sessionStorage.getItem('auth-user')
    return this.http.get(`http://127.0.0.1:8000/api/jobs/${id}`,
    {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)});
  }
  applyForJob(id:number, years_of_exp:number, cv:string, cover_letter:string, notice_period:any){
    this.token=sessionStorage.getItem('auth-user')
    return this.http.post(`http://127.0.0.1:8000/api/jobs/${id}/apply/`,{
      years_of_exp,
      notice_period,
      cover_letter
    },
    {headers: new HttpHeaders().set('Authorization', 'token '+JSON.parse(this.token).token)})
  }
  getNotificationState(id:number){
    return this.http.get("")
  }
  changeNotificationsState(id:number, state:boolean){
    return this.http.post("", state)
  }
  getProfileDetails(id:number){
    return this.http.get("")
  }
  getWorkExperience(id:number){
    return this.http.get("")
  }
  deleteWorkExperience(id:number){
    return this.http.delete("")
  }
  editBasicInfo(id:number, data:{}){
    return this.http.put("", data)
  }
  changePassword(id:number, password:string){
    return this.http.put("", password)
  }
  addWorkExperience(id:number, data:{}){
    return this.http.post("", data)
  }
  editWorkExperience(id:number, data:{}){
    return this.http.put("", data)
  }
  addInterviewQuestions(id:number, data:{}){
    return this.http.post("", data)
  }
  addReview(id:number, data:{}){
    return this.http.post("", data)
  }
  addSalary(id:number, data:{}){
    return this.http.post("", data)
  }
  getCompanyOverview(id:number){
    return this.http.get("")
  }
  getCompanyReviews(id:number){
    return this.http.get("")
  }
  getCompanySalaries(id:number){
    return this.http.get("")
  }
}
