import { Injectable } from '@angular/core';
import { Loading } from 'src/app/shared/services/loading';
import { AccountSignUp, Authenticate, AuthResponse, Login } from '../../../domain/useCases/authenticate.useCase.interface';
import { Account, ActivitiesProgress, EagerAccount, Role } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAWSService extends Loading implements Authenticate {

  account: EagerAccount;
  login: Login;
  accountSignUp: AccountSignUp;

  constructor() {
    super();

    this.account = {
      id: '',
      fullName: '',
      email: '',
      collegeEnrollment: '',
      collegeName: '',
      activitiesProgress: null,
      role: Role.TEACHER,
      activities: null,
      createdAt: null,
      updatedAt: null,
      accountActivitiesProgressId: null,
    };

    this.login = { password: '', username: '' };

    this.accountSignUp = {
      name: '',
      password: '',
      username: '',
      attributes: {
        email: '',
        name: '',
      },
    }
  }

  signUp(accountSignUp: AccountSignUp, account: EagerAccount): Promise<AuthResponse> {
    console.log({ accountSignUp, account });
    this.isLoading = true;
    const waitSeconds = 1000 * 3;
    setTimeout(() => { this.isLoading = false; }, waitSeconds);
    return new Promise<AuthResponse>((resolve, reject) => {
      setTimeout(() => {
        const res: AuthResponse = { isOk: false };
        resolve(res);
      }, 3000);
    });

  }

  signIn(login: Login): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }

  confirmSignUp(): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }

  resendConfirmationCode(): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }

  signOut(): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }
}
