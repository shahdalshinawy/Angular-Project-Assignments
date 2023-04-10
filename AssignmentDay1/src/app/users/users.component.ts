import { Component,OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(private userService:UsersService) {  }
  usersList:any=[];
  errorMessage:any;
ngOnInit(): void {
  this.userService.GetAllUsers().subscribe({
    next:data=>this.usersList=data,
    error:error=>this.errorMessage=error
  })
}
}
