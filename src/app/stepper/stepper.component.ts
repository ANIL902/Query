import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  adharcard:boolean=false;
  pancard:boolean=false;
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  radioChange(value){
    if(value =='adhardeatils'){console.log(value)
      this.adharcard=true;
      this.pancard=false;
      this.firstFormGroup.get('panname').setValue('');
      this.firstFormGroup.get('panname').clearValidators();
      this.firstFormGroup.get('panname').updateValueAndValidity();
      this.firstFormGroup.get('pannum').setValue('');
      this.firstFormGroup.get('pannum').clearValidators();
      this.firstFormGroup.get('pannum').updateValueAndValidity();
    }
    else {
      this.pancard=true;
      this.adharcard=false;
      this.firstFormGroup.get('panname').setValidators([Validators.required,Validators.pattern('[a-zA-Z]+$')]);
      this.firstFormGroup.get('panname').updateValueAndValidity();
      this.firstFormGroup.get('pannum').setValidators([Validators.required,Validators.maxLength(10),Validators.pattern('[a-zA-Z0-9]+$')]);
      this.firstFormGroup.get('pannum').updateValueAndValidity();
      this.firstFormGroup.get('adharnumber').setValue('');
      this.firstFormGroup.get('adharnumber').clearValidators();
      this.firstFormGroup.get('adharnumber').updateValueAndValidity();
      this.firstFormGroup.get('adharname').setValue('');
      this.firstFormGroup.get('adharname').clearValidators();
      this.firstFormGroup.get('adharname').updateValueAndValidity();
     
    }
  }
  constructor(private fg:FormBuilder) {
    this.firstFormGroup=this.fg.group({
      firstCtrl:['',[Validators.required,]],
      mbileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      adharname:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      adharnumber:['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(16)]],
      panname:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      pannum:['',[Validators.required,Validators.maxLength(10),Validators.pattern('[a-zA-Z0-9]+$')]]
    })
    this.secondFormGroup=this.fg.group({
      secondCtrl:['',Validators.required],
      empid:['',Validators.required],
      slary:['',Validators.required]
    })
   }

  ngOnInit() {
  }

}
