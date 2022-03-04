import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateService } from 'src/app/mate.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-detailfiche',
  templateUrl: './detailfiche.component.html',
  styleUrls: ['./detailfiche.component.css']
})
export class DetailficheComponent implements OnInit {
num:any;
readDatafpd:any;
be:any;
@ViewChild('content',{static :false}) el!:ElementRef;
  constructor(private service:MateService , private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.getSingleDatafp(this.route.snapshot.paramMap.get('num'));
  }

  getSingleDatafp(be: any){
    this.service.getSingleDatafp(be).subscribe((res)=>{
      console.log(res,"res=>");
      this.readDatafpd=res.data;
    });
  
  }

  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("fs.pdf");
      }
    });
   
  }
}
