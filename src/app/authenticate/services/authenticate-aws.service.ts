import { Injectable } from '@angular/core';
import { Loading } from 'src/app/shared/services/loading';
import { AccountSignUp, Authenticate, AuthResponse, Login, SignUpParams } from '../../../domain/useCases/authenticate.useCase.interface';
import { EagerAccount, Role } from 'src/models';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createAccount } from 'src/graphql/mutations';

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

  async signUp(signUpParams: SignUpParams): Promise<AuthResponse> {

    this.isLoading = true;

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

      let response: AuthResponse = { isOk: true, data: accountRes };

      this.isLoading = false;
      return response;

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
