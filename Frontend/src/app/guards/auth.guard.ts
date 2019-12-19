import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _router: Router, public _user: UserService) {


  }



  canActivate() {

    if (localStorage.getItem("98asdqLKjs8") == "7ras9AS2hk") {
      return true;
    } else {
      this._router.navigateByUrl("/onboarding");
      return false;
    }


  }

}
