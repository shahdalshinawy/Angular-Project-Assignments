import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Shared Classes and types/User';
import { matchPass } from '../validations/confirmPassword';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.scss']
})
export class ReactiveRegisterComponent {
  user=new User('','','','','');

  constructor(private fbuilder:FormBuilder)
  {}
  reactiveRegisterForm=this.fbuilder.group({
    username:['',Validators.required],
    email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmpassword:['',[Validators.required]],
  },{validator:[matchPass]})
  
  loadData()
{ 
  this.reactiveRegisterForm.patchValue({
    username:this.user.username,
    email:this.user.email,
    password:this.user.password
  });
}
// get passwordMatchError() {
//   return (
//     this.reactiveRegisterForm.getError('mismatch') &&
//     this.reactiveRegisterForm.get('confirmpassword')?.touched
//   );
// }
}
