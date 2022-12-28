import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateAWSService } from '../services/authenticate-aws.service';
import { Account, Role } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class ExistATutorLoggedGuard implements CanLoad {

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Promise<boolean> | boolean {

    return this.authenticateAWSService.getCurrentTutor()
      .then(
        (getCurrentTutorResponse) => {
          const userLogged = getCurrentTutorResponse.data as Account;
          const existAUserTutorLogged = !(userLogged === null);
          if (existAUserTutorLogged == true) return true;
          this.router.navigate(['./cuenta']);
          return false;
        }
      )

    return true;
  }
}
