import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AccountSignUp, AuthService, Login, AuthResponse } from '../interfaces/auth-service.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthAWS implements AuthService {

  public accountSignUp: AccountSignUp;
  public login: Login;
  private _isLoading: boolean = false;

  constructor() {

    this.login = {
      username: '',
      password: ''
    };

    this.accountSignUp = {
      name: '',
      username: '',
      password: '',
      attributes: {
        email: '',
        name: ''
      }
    };
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

  public get isLoading(): boolean { return this._isLoading; }

  async signUp(accountSignUp: AccountSignUp): Promise<AuthResponse> {

    this._isLoading = true;
    let response: AuthResponse = {
      isOk: false,
      data: undefined,
      message: undefined,
    };

    try {

      const { user } = await Auth.signUp({
        username: accountSignUp.username,
        password: accountSignUp.password,
        attributes: {
          name: accountSignUp.name,
          email: accountSignUp.username,
        },
        autoSignIn: {
          enabled: true, // optional - enables auto sign in after user is confirmed
        }
      });

      response.isOk = true;
      response.message = 'Datos registrados';

    } catch (error: any) {

      let msg = '[NOT_MESSAGE]';

      switch (error.code) {
        case "UsernameExistsException": { msg = 'El correo electrónico ya esta en uso.'; break; }
        default: break;
      }

      response.isOk = false;
      response.message = msg;
    }

    this._isLoading = false;
    return response;
  }

  async signIn(login: Login): Promise<AuthResponse> {
    const { username, password } = login;

    try {
      const user = await Auth.signIn(username, password);
      console.log("🚀 ~ file: authAWS.service.ts ~ line 16 ~ AuthAWS ~ signIn ~ user", user)

      const response: AuthResponse = {
        isOk: true
      };
      return response;
    } catch (error) {
      const response: AuthResponse = {
        isOk: false
      };
      return response;
    }
  }
}
