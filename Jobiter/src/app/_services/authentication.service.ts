import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../_models/company';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogged = 'false'
  currentUserType = ''
  constructor(public http: HttpClient) {}
   companySignUp(company_name:string, email:string,username:string, password:string, password_confirm:string, 
    phone:string, address:string, city:string, industry:string, started_at:string, 
    company_size:String, imageUrl:string, websiteLink:string, about:string){
      return this.http.post('http://127.0.0.1:8000/api/accounts/company_signup/', {
        company_name,
        username,
        email,
        password,
        password_confirm,
        phone,
        address,
        city,
        industry,
        started_at,
        company_size:null,
        imageUrl,
        websiteLink,
        about
      })
   }
   applicantSignUp(firstname:string, lastname:string, email:string, password:string,confirm_password:string,
    job_title:string, phone:string, city:string, level:string, faculty:string, date_of_birth:string,
    gender:string, profile_image:string, cv:string){
      return this.http.post('', {
        firstname,
        lastname,
        email,
        password,
        confirm_password,
        job_title,
        phone,
        city,
        level,
        faculty,
        date_of_birth,
        gender,
        profile_image,
        cv
        })
   }
   login(username:string, password:string){
      return this.http.post("http://127.0.0.1:8000/api/accounts/login/", {
        username,
        password
      })
   }
}
