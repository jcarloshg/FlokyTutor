import { Injectable } from '@angular/core';
import { AccountSignUp, Authenticate, AuthResponse, Login } from '../../../domain/useCases/authenticate.useCase.interface';
import { Loading } from 'src/app/shared/services/loading';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAWSService extends Loading implements Authenticate {

  login: Login;
  accountSignUp: AccountSignUp;

  constructor() {
    super();

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

  signIn(login: Login): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }

  signUp(accountSignUp: AccountSignUp): Promise<AuthResponse> {
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
