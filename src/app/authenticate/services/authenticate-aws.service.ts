import { Injectable } from '@angular/core';
import { Loading } from 'src/app/shared/services/loading';
import { Authenticate, AuthResponse, SignUpParams, LoginParams } from '../../../domain/useCases/authenticate.useCase.interface';
import { EagerAccount, Role } from 'src/models';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createAccount } from 'src/graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAWSService extends Loading implements Authenticate {

  private _account: EagerAccount | null = null;
  private _loginParams: LoginParams | null = null;
  private _signUpParams: SignUpParams | null = null;

  constructor() {
    super();
  }

  public get account() { return this._account; }
  public get signUpParams() { return this._signUpParams; }
  public get loginParams() { return this._loginParams; }

  async signUp(signUpParams: SignUpParams): Promise<AuthResponse> {

    this.isLoading = true;
    this._signUpParams = signUpParams;

    try {
      const { user } = await Auth.signUp({
        username: signUpParams.email,
        password: signUpParams.pass,
        attributes: {
          name: signUpParams.fullName,
          email: signUpParams.email,
        },
        autoSignIn: {
          enabled: true, // optional - enables auto sign in after user is confirmed
        }
      });

      const accountInput = {
        fullName: signUpParams.fullName,
        email: signUpParams.email,
        role: signUpParams.role,
        collegeEnrollment: signUpParams.collegeEnrollment,
        collegeName: signUpParams.collegeName,
      }

      const accountRes = await API.graphql(
        graphqlOperation(
          createAccount,
          {
            input: accountInput,
          }
        )
      );

      this.isLoading = false;
      return {
        isOk: true,
        data: accountRes,
      };

    } catch (error: any) {

      let response: AuthResponse = { isOk: false, data: null, message: undefined };

      switch (error.code) {
        case "UsernameExistsException": { response.message = 'El correo electrónico ya esta en uso.'; break; }
        default: response.data = error;
      }

      this.isLoading = false;
      return new Promise<AuthResponse>((resolve, reject) => resolve(response));
    }

  }

  signIn(login: LoginParams): Promise<AuthResponse> {
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
