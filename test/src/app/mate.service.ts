import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MateService {

  constructor(private _http:HttpClient) { }
  apiUrl ='http://localhost:3000/materiel'
  apiUrlfp ='http://localhost:3000/projet'

  getAllData():Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  } 

  createData(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`,data);
  }
  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }
 
  updateData(data:any,id:any):Observable<any>
  {
    let ids =id ;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }

  getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/one/${ids}`);
  }
  getAllDatafp():Observable<any> {
    return this._http.get(`${this.apiUrlfp}`);
  } 
  getSingleDatafp(num:any):Observable<any>
  {
    let ids = num;
    return this._http.get(`${this.apiUrlfp}/p/${ids}`);
  }
  createDatapj(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrlfp}`,data);
  }
}
