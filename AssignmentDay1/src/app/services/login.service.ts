import { Injectable } from '@angular/core';
import { loggedUser } from '../Shared Classes and types/loggedUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginURL:string="http://localhost:3001/login";
  constructor(private http:HttpClient) { }
  login(user:loggedUser)
  {
   return this.http.post(this.loginURL,user);
  }
}
