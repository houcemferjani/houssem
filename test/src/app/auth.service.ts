import { Injectable } from '@angular/core';
import { Admin } from './model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admins : Admin[]=[{"email":"admin@gmail.com","password":"123456","roles":['ADMIN']}];
  public loggedUser:string="";
  public isloggedIn: Boolean=false;
  public roles: string[] = [];
  constructor() { }

  SignIn(user:Admin):Boolean{let validUser:Boolean=false;   
    this.admins.forEach((curUser) =>{
    if(user.email===curUser.email && user.password==curUser.password)
    {
    validUser=true;
    this.loggedUser=curUser.email;
    this.isloggedIn=true;
    this.roles=curUser.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));}
    });
    return validUser;
  }   
  isAdmin():Boolean{
    if(!this.roles)
    return false;
    return(this.roles.indexOf('ADMIN')>-1);
    ;
  } 
}
