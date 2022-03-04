import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { MateService } from '../mate.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-readmateriel',
  templateUrl: './readmateriel.component.html',
  styleUrls: ['./readmateriel.component.css']
})
export class ReadmaterielComponent implements OnInit {
 @ViewChild('content',{static :false}) el!:ElementRef;
  constructor(private service:MateService) { }
  readData:any;
  nom:any;
  
  ngOnInit(): void {
  this.getAllData();
    
  }
  

deleteID(id:any){
  console.log(id,'deleteid==>');
  this.service.deleteData(id).subscribe((res)=>{
console.log(res,'deleteres=>')
this.getAllData();
  });
}


getAllData(){
  this.service.getAllData().subscribe((res)=>{
    console.log(res,"res=>");
    this.readData=res.data;
  });

}

makePDF(){
  let pdf = new jsPDF('p','pt','a4');
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("demo.pdf");
    }
  });
 
}
Search(){
  if(this.nom != ""){
    this.readData = this.readData.filter((res: { nom: any; })=> {
      return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    });
  }else if (this.nom == ""){
    this.ngOnInit();
  }

}

}
