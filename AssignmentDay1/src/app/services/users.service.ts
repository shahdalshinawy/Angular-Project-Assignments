import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUsers } from '../Shared Classes and types/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _urlUsers="https://jsonplaceholder.typicode.com/users";
  AllUsers:any=this.GetAllUsers();
  constructor(private router:Router,private http:HttpClient) { }
  GetAllUsers():Observable<IUsers[]>
  {
    return this.http.get<IUsers[]>(this._urlUsers).pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error");
    }));
  }
}
