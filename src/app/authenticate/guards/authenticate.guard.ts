import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateAWSService } from '../services/authenticate-aws.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanLoad {

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authenticateAWSService.getCurrentTutor()
      .then(
        (userTutor) => {

          // console.log('canLoad - then: ', userTutor);
          return true;
        }
      )
      .catch(
        (error) => {
          // console.log('canLoad - error: ', error);
          this.router.navigate(['./cuenta/ingresar']);
          return false;
        }
      );

  }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Promise<boolean> | boolean {

    return this.authenticateAWSService.getCurrentTutor()
      .then(
        (userTutor) => {
          console.log('====================================');
          console.log({ userTutor });
          console.log('====================================');


          return true;
        }
      )
      .catch(
        (error) => {
          // console.log('canLoad - error: ', error);
          this.router.navigate(['./cuenta/ingresar']);
          return false;
        }
      );
  }

}
