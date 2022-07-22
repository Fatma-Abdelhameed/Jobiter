import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(public http:HttpClient) { }
  getCities(){
    return this.http.get("")
  }
  getAllCompanies(){
    return this.http.get("")
  }
  getJobDetails(id:number){
    return this.http.get("");
  }
  applyForJob(applicantId:number, yearsOfExp:number, cv:string, cover_letter:string, starting_date:string){
    return this.http.post("",{})
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
}
