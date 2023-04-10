import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../Shared Classes and types/IProduct';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 
  prod:IProducts[]=[
    {ID:3,Name:'p3',Quanitity:50,Price:200,img:"assets/shahd.jpg"},
    {ID:4,Name:'p4',Quanitity:50,Price:200,img:"assets/shahd.jpg"},
  ]
  @Output() childEvent = new EventEmitter();
  
  constructor(){
   
  }
  ngOnInit(): void {
  }
  sendData()
  {
    this.childEvent.emit(this.prod);
  }

  sayWelcome()
  {
    console.log("welcome im child")
  }

}