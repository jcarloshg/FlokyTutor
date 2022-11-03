import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AccountSignUp, AuthService, Login } from '../interfaces/auth-service.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthAWS implements AuthService {

  public accountSignUp: AccountSignUp;
  public login: Login;

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

  confirmSignUp() {
    throw new Error('Method not implemented.');
  }

  resendConfirmationCode() {
    throw new Error('Method not implemented.');
  }

  signOut() {
    throw new Error('Method not implemented.');
  }

  async signUp(accountSignUp: AccountSignUp) {
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
      return user;
    } catch (error) {
      console.log('error signing up:', error);
      return null;
    }
  }

  async signIn(login: Login) {
    const { username, password } = login;
    try {
      const user = await Auth.signIn(username, password);
      console.log("🚀 ~ file: authAWS.service.ts ~ line 16 ~ AuthAWS ~ signIn ~ user", user)
    } catch (error) {
      console.log({ error });

    }
  }
}
