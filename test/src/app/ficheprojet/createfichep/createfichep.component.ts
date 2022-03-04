import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { MateService } from 'src/app/mate.service';
@Component({
  selector: 'app-createfichep',
  templateUrl: './createfichep.component.html',
  styleUrls: ['./createfichep.component.css']
})
export class CreatefichepComponent implements OnInit {
  public _values1 = ["SMS", "email", "téléphone"];
  constructor(private service:MateService) { }

  ngOnInit(): void {
  }
  projetForm =new FormGroup({
    'nomc': new FormControl('',Validators.required),
    'typec': new FormControl('',Validators.required),
    'datec': new FormControl('',Validators.required),
    'typep': new FormControl('',Validators.required),
    'codes': new FormControl('',Validators.required),
    'zone': new FormControl('',Validators.required),
    'datel': new FormControl('',Validators.required),
    'datea': new FormControl('',Validators.required),
    'typei': new FormControl('',Validators.required),
    'prixp': new FormControl('',Validators.required),
    'nbot': new FormControl('',Validators.required)
  });

  projetSubmit(){
    if(this.projetForm.valid){
      console.log(this.projetForm.value);
      this.service.createDatapj(this.projetForm.value).subscribe((res)=>{
        console.log(res,'res=>');
        
        /*this.materielForm.reset();*/
      })
    }
    
    else{
      console.log("all field is required")
    }
  }
}
