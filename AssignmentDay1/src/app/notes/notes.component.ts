import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';
import {ForbiddenNameValidator} from '../validations/nameValidator'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  constructor(private fbuilder:FormBuilder) {
    
  }
  notesForm=this.fbuilder.group({
    Name:['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator(/admin|administrator/)]],
    products:[''],
    discount:[false],
    optionalInput:[''],
    comment:[''],
    comments:this.fbuilder.array([]),
    })
  
  productItems=[
    {ID:1,Name:'p1',Quanitity:80,Price:9800,img:"assets/shahd.jpg"},
    {ID:2,Name:'p2',Quanitity:10,Price:200,img:"assets/shahd.jpg"},
    {ID:3,Name:'p3',Quanitity:550,Price:2000,img:"assets/shahd.jpg"},
  ]
  get comments()
  {
    return this.notesForm.get('comments') as FormArray;
  }
  
  AddComment(){
    this.comments.push(this.fbuilder.control(''));
  }
  get Name()
  {
    return this.notesForm.get('Name');
  }
  get optionalInput()
  {
    return this.notesForm.get('optionalInput');
  }
  setDiscount(){
this.notesForm.get('discount')?.valueChanges.subscribe(checkedValue=>{
  if(checkedValue)
  {
    this.optionalInput?.setValidators(Validators.required);
  }
  else{
    this.optionalInput?.clearValidators();
  }
  this.optionalInput?.updateValueAndValidity();
})
  }
  submitNotesForm(){
    console.log(this.notesForm.value);
  }
 
}
