import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPosts } from '../Shared Classes and types/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  _urlPosts="https://jsonplaceholder.typicode.com/posts";
  AllPosts:any=this.GetAllPosts();
  constructor(private router:Router,private http:HttpClient) { }
  GetAllPosts():Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this._urlPosts).pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error");
    }));
  }
}
