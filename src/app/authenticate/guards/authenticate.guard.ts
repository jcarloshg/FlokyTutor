import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateAWSService } from '../services/authenticate-aws.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanLoad {

  constructor(
    public authenticateAWSService: AuthenticateAWSService,
  ) {

  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Promise<boolean> | boolean {


    this.authenticateAWSService.currentTutor()
      .then(
        (userTutor) => {
          console.log(userTutor);

        }
      )
      .catch();

    return true;
  }

}
