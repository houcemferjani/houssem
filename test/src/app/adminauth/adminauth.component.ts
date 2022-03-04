import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'app-adminauth',
  templateUrl: './adminauth.component.html',
  styleUrls: ['./adminauth.component.css']
})
export class AdminauthComponent implements OnInit {
 myimage:string ="assets/images/images.png"
 mybackimage:string="assets/images/oo.jpg"
admin = new Admin;
erreur=0;
  constructor(private authService :AuthService ,private router:Router) { }


  ngOnInit(): void {
  }
  onLoggedin(){
    console.log(this.admin);
    let isValidUser:Boolean=this.authService.SignIn(
    this.admin);
    if(isValidUser)
    this.router.navigate(['/dashboard']);
    else alert( 'Login ou mot de passe incorrecte!');
  }
}
