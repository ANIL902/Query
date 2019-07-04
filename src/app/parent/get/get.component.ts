import { Component, OnInit } from '@angular/core';
import{ DataserviceService} from '../dataservice.service';
import { MatTableDataSource,MatDialog,MatDialogRef} from '@angular/material';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import {Floor, IResponse} from '../Floor-module';
import {ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  [x: string]: any;
  users:Floor[];
  datasource;
  Queryform:FormGroup;
   //form=this.Queryform.value.details;
 
  constructor(private route:ActivatedRoute,private dialog:MatDialog,private dataservice:DataserviceService,private fg:FormBuilder) { 
    this.getapi();
    //   this.dataservice.getQuery(this.form).subscribe(result=>{
    //   this.route.queryParams.subscribe(params=>{console.log('data3',params)
    //      this.data1= +params['data1'];
    // //    console.log('quer',this.data1)
    //    })
    // })
  
  }
  // validation(){
  //   this.dataservice.getQuery(this.Queryform.value.details).subscribe((result:IResponse)=>
  //   {console.log('result=>',result.messages)
  //   })
  // }
  validation(){
    this.dataservice.getQuery(this.Queryform.value.details,this.Queryform.value.formdata).subscribe((result:IResponse)=>{
    console.log('formdata=>',result.messages)
    })
  }
  getapi(){
    this.dataservice.getdata().subscribe(data=>{
      console.log('data => ',data);
      this.users=data['floors'];
      this.datasource=new MatTableDataSource(this.users)
      console.log(this.users)
    })
    
  }

  
  displayedColumns:string[]=['floorArbName','floorId','floorName','orgId','status']

  ngOnInit() {
    this.Queryform=this.fg.group({
      details:['',[Validators.required]],
      formdata:['',[Validators.required]]
    })
    
  }

 

  create(){
   const dialogRef=this.dialog.open(CreateComponent,{
    width:'250px'
   })
   dialogRef.afterClosed().subscribe(data=>{
      this.dataservice.createdata(data).subscribe(Data=>{console.log(Data)
       this.users=Data['floors'];
       this.datasource=new MatTableDataSource(this.users);
       this.getapi();
      })
   })
  }
  edit(user){
    const dialogRef=this.dialog.open(EditComponent,{
      width:'250px',
      data:user
    })
    dialogRef.afterClosed().subscribe(result=>{
    // if(result){
    //   this.users.forEach(x=>{
    //     if(x.orgId==result.orgId){
    //       x.orgId=result.orgId;
    //       x.floorArbName=result.floorArbName;
    //       x.floorId=result.floorId;
    //       x.floorName=result.floorName;
    //       x.status=result.status;
    //     }
    //     this.getapi();
    //   })
    //}
      this.getapi();
    })
  }
  

  
  
}
