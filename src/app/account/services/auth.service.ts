import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthInterface } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthInterface {

  constructor() { }

  signIn() {
    throw new Error('Method not implemented.');
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
