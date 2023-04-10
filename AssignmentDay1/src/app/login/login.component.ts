import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { loggedUser } from '../Shared Classes and types/loggedUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userModel=new loggedUser("","");
  constructor(private login:LoginService)
  {}
  submitDataLogin()
  {
    this.login.login(this.userModel).subscribe({
      next:data=>console.log( "welcome "+this.userModel.email),
      error:error=>console.log(error)
    });
  }
}
