import { Component,OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private postsService:PostsService) {}
  postsList:any=[];
  errorMessage:any;
  postid:any;
ngOnInit(): void {
  this.postsService.GetAllPosts().subscribe({
    next:data=>this.postsList=data,
    error:error=>this.errorMessage=error
  })
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.postid=params.get("id");})

}

showComments(postid:number){
  this.router.navigate(["/posts",postid,"/comments"]);
}
}
