import { Component, OnInit } from '@angular/core';
import { MateService } from 'src/app/mate.service';

@Component({
  selector: 'app-listefichep',
  templateUrl: './listefichep.component.html',
  styleUrls: ['./listefichep.component.css']
})
export class ListefichepComponent implements OnInit {
  
  
  constructor(private service:MateService) { }
  readDatafp:any;
  nomC:any;
  ngOnInit(): void {
    this.getAllDatafp();
  }

  Search(){
    if(this.nomC != ""){
      this.readDatafp = this.readDatafp.filter((res: { nomC: any; })=> {
        return res.nomC.toLocaleLowerCase().match(this.nomC.toLocaleLowerCase());
      });
    }else if (this.nomC == ""){
      this.ngOnInit();
    }
  
  }

  getAllDatafp(){
    this.service.getAllDatafp().subscribe((res)=>{
      console.log(res,"res=>");
      this.readDatafp=res.data;
    });
  
  }

}
