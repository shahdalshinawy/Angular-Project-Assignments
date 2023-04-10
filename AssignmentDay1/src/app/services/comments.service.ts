import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Route, Router } from '@angular/router';
import { IPosts } from '../Shared Classes and types/IPosts';
import { PostsService } from './posts.service';
import { IComments } from '../Shared Classes and types/IComments';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private postsService:PostsService,private router:Router,private http:HttpClient) { }

_commentsUrl:any="https://jsonplaceholder.typicode.com/comments";
postid!:any;
posts:any=this.postsService.GetAllPosts();
    getCommentsByPostID(){
      
      for(let post of this._commentsUrl)
      {
        if(post.id==this.postid)
        {
          return post;
        }
      }
      return null;
    }
    
  GetAllComments():Observable<IComments[]>
  {
    return this.http.get<IComments[]>(this._commentsUrl).pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error");
    }));
  }
  
}

