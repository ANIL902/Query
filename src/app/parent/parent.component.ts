import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public CData: number;
  showChildContent:boolean=false;
  constructor() { }

  ngOnInit() {console.log("CData",this.CData);
  
  }
showChild(value){

if(value)
    this.showChildContent=true;
    else
      this.showChildContent=false;
}
}
