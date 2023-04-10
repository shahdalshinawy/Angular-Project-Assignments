import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentsService } from '../services/comments.service';
import { PostsService } from '../services/posts.service';
import { IComments } from '../Shared Classes and types/IComments';
import { IPosts } from '../Shared Classes and types/IPosts';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  postid:any;
  constructor(private activatedRoute:ActivatedRoute,private CommentsService:CommentsService) {}
  selectedPost!:IPosts;
commentsList=[];
ngOnInit(): void {
  this.postid=this.activatedRoute.snapshot.paramMap.get("postId");
  this.selectedPost=this.CommentsService.getCommentsByPostID();
 
}
GetCommentsByPostID(postid:any)
    {
    var commentsList2=this.CommentsService.getCommentsByPostID();
    if(commentsList2!=null)
    {
        this.commentsList=commentsList2;
    }
    
    }
}
