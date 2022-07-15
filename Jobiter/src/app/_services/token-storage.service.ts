import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  logout(){
    sessionStorage.clear()
  }
  saveToken(token:string){
    sessionStorage.removeItem('auth-token')
    sessionStorage.setItem('auth-token', token)
  }
  saveUser(user:any){
    sessionStorage.removeItem('auth-user')
    sessionStorage.setItem('auth-user', JSON.stringify(user))
  }
  getToken(){
    return sessionStorage.getItem('auth-token')
  }
  public getUser(): any{
    const user = sessionStorage.getItem('auth-user')
    if(user){
      return JSON.parse(user)
    }
    else{
      return {}
    }
  }
}
