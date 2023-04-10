import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User } from '../Shared Classes and types/User'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerURL:string="http://localhost:3000/register";
  constructor(private http:HttpClient) { }
  register(user:User)
  {
   return this.http.post(this.registerURL,user);
  }
}
