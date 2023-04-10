import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../Shared Classes and types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  websites=["facebook","google","twitter"];
  userModel=new User("","","","","");
  constructor(private register:RegisterService){}
  submitData()
  {
    this.register.register(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
    });
  }
}
