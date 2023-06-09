import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ApiService,private rout:Router) { }
  canActivate():boolean{
      if(this.service.loginToken()){
          return true;
      }else{
        return false;
      }
  }
  
}
