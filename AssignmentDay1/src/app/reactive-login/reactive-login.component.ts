import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { loggedUser } from '../Shared Classes and types/loggedUser';
@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent {
  user=new loggedUser('shahd','1234');
// reactiveLoginForm=new FormGroup({
//   email:new FormControl(''),
//   password:new FormControl('')
// })
constructor(private fbuilder:FormBuilder)
{}
reactiveLoginForm=this.fbuilder.group({
  email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
  password:['',[Validators.required,Validators.minLength(6)]]
})
loadData()
{
 
  this.reactiveLoginForm.setValue({
    email:this.user.email,
    password:this.user.password
  });
}
}
