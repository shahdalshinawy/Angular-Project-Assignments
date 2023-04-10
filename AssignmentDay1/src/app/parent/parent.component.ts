import { Component , OnInit, Output, ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProducts } from '../Shared Classes and types/IProduct';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 parentprod:IProducts[]=[];
  @ViewChild(ChildComponent) child!: ChildComponent;
  constructor() { }
  

  ngOnInit(): void {
    this.child.sendData();
  }

  ngAfterViewInit()
  {
    this.child.sayWelcome();
  }

}
