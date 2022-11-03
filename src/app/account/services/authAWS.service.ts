import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthService, Login } from '../interfaces/auth-service.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthAWS implements AuthService {

  constructor() { }

  async signIn(login: Login) {
    const { username, password } = login;
    try {
      const user = await Auth.signIn(username, password);
      console.log("🚀 ~ file: authAWS.service.ts ~ line 16 ~ AuthAWS ~ signIn ~ user", user)
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  signOut() {
    throw new Error('Method not implemented.');
  }
  signUp() {
    throw new Error('Method not implemented.');
  }
  confirmSignUp() {
    throw new Error('Method not implemented.');
  }
  resendConfirmationCode() {
    throw new Error('Method not implemented.');
  }
}
