import { Injectable } from '@angular/core';
import { Company } from '../_models/company';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogged = 'false'
  currentUserType = ''
  constructor() {

   }
}
