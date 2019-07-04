import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 
  // message:string="hello world";
  // @Output() MessageEvent=new EventEmitter()

  // constructor() { }
  // sendmessage(){
  //   this.MessageEvent.emit(this.message);
  
  // }

  @Input() PData:number;
  @Output() childEvent=new EventEmitter();
  showChild:boolean=false;
   constructor() {  console.log("PData",this.PData);}
   
   onChange(value){
    this.childEvent.emit(value);
   }
  ngOnInit() {
  }

}
