import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { Floor } from '../Floor-module';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editform:FormGroup;
  edituser;
  constructor(public dialogRef:MatDialogRef<EditComponent>, private fg:FormBuilder,  @Inject(MAT_DIALOG_DATA) public data:Floor,public service:DataserviceService) { 
    this.editform=this.fg.group({
      floorArbName:['',[Validators.required]],
      floorId:['',[Validators.required]],
      floorName:['',[Validators.required]],
      orgId:['',[Validators.required]],
      status:['',[Validators.required]],
    });
    if(data){
      this.editform.patchValue(data);
    }
  }
  onclick(){
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  editdat(){
    this.edituser={
     floorArbName:this.editform.value.floorArbName,
     floorId:this.editform.value.floorId,
     floorName:this.editform.value.floorName,
     orgId:this.editform.value.orgId,
     status:this.editform.value.status,
    }
    this.service.editdata(this.edituser).subscribe(result=>{
      if(result){
        this.dialogRef.close(this.edituser)
      }
    })

  }

}
