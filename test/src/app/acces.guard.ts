import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Admin } from './model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AccesGuard implements CanActivate {
  constructor(private authService :AuthService ,
    private router :Router){}
    
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.authService.isAdmin())
     {this.router.navigate(['forbidden']);
     return false;} 

      else
        return true ;
      
  }
  
}
