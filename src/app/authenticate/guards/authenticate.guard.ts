import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthenticateAWSService } from '../services/authenticate-aws.service';
import { Account, Role } from 'src/contexts/shared/domain/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanLoad {

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Promise<boolean> | boolean {

    return this.authenticateAWSService.getCurrentTutor()
      .then(
        (getCurrentTutorResponse) => {
          const userLogged = getCurrentTutorResponse.data as Account;
          const existAUserTutorLogged = !(userLogged === null);
          if (existAUserTutorLogged == false) return true;
          this.router.navigate(['./incio']);
          return false;
        }
      );

  }

}
