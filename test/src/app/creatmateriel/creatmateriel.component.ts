import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import { MateService } from '../mate.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-creatmateriel',
  templateUrl: './creatmateriel.component.html',
  styleUrls: ['./creatmateriel.component.css']
})
export class CreatmaterielComponent implements OnInit {

  constructor(private service:MateService , private router:ActivatedRoute, private rout:Router ) { }
getparamid:any;
  ngOnInit(): void {
   this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res=>');
        this.materielForm.patchValue({
          ref:res.data[0].ref,
          nom:res.data[0].nom,
          qte:res.data[0].qte
        });
      })  ;

    }
  
  }
materielForm =new FormGroup({
  'ref': new FormControl('',Validators.required),
  'nom': new FormControl('',Validators.required),
  'qte': new FormControl('',Validators.required)
});
materielSubmit(){
  if(this.materielForm.valid){
    console.log(this.materielForm.value);
    this.service.createData(this.materielForm.value).subscribe((res)=>{
      console.log(res,'res=>');
      this.rout.navigate(['readmateriel']);
      this.materielForm.reset();
    })
  }
  
  else{
    console.log("all field is required")
  }
}
materielUpdate(){
  console.log(this.materielForm.value,'updatedform');
if(this.materielForm.valid){
  this.service.updateData(this.materielForm.value,this.getparamid).subscribe((res)=>{
    console.log(res)
    this.rout.navigate(['readmateriel']);
  })


}else{
  console.log("all fields are required")

}

}



}
