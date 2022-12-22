import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient:HttpClient,private router:Router) {}

  login(loginData:any) {
    return this.httpClient.post(`${environment.apiUrl}users/login`, loginData)
  }

  saveLoginData(loginData:any) {
    localStorage.setItem('loginData', JSON.stringify(loginData)
    )
  }

getLoginData(){
  return JSON.parse(localStorage.getItem('loginData') || '{}')
}

getAuthenticated():boolean {
  return this.getToken() != null
}

getToken(){
  return this.getLoginData()?.token
}

getId(){
  return this.getLoginData()?.user_id
}

getName(){
  return `${this.getLoginData()?.first_name} ${this.getLoginData()?.last_name}`
}

signOut(){
  localStorage.removeItem('loginData')
  this.router.navigate(['/home'])
}

register(data:any){
return this.httpClient.post(`${environment.apiUrl}users/register`, data)
}

placeOrder(data:any, token:string){
  const headers = new HttpHeaders({"Content-Type": "application/json","x-access-token":token})
  return this.httpClient.post(`${environment.apiUrl}orders`, data, {headers})
}

}
