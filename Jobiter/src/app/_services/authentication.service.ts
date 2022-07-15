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
   companySignUp(name:string, email:string, password:string, confirmPass:string, 
    phone:string, address:string, city:string, industry:string, startedAt:string, 
    size:Number, imageUrl:string, websiteLink:string, about:string){
      return this.http.post('http://127.0.0.1:8000/accounts/company_signup/', {
        name,
        email,
        password,
        confirmPass,
        phone,
        address,
        city,
        industry,
        startedAt,
        size,
        imageUrl,
        websiteLink,
        about
      })
   }
   login(email:string, password:string){

   }
}
