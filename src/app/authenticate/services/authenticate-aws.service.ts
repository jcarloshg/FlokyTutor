import { Injectable } from '@angular/core';
import { Loading } from 'src/app/shared/services/loading';
import { AccountSignUp, Authenticate, AuthResponse, Login } from '../../../domain/useCases/authenticate.useCase.interface';
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

  async signUp(accountSignUp: AccountSignUp, account: EagerAccount): Promise<AuthResponse> {

    this.isLoading = true;

    try {

      // const { user } = await Auth.signUp({
      //   username: accountSignUp.username,
      //   password: accountSignUp.password,
      //   attributes: {
      //     name: accountSignUp.name,
      //     email: accountSignUp.username,
      //   },
      //   autoSignIn: {
      //     enabled: true, // optional - enables auto sign in after user is confirmed
      //   }
      // });

      // create accoun db

      const accountInput = {
        fullName: '',
        email: '',
        role: Role.TEACHER,
        collegeEnrollment: '',
        collegeName: ''
      }

      const accountRes = await API.graphql(
        graphqlOperation(
          createAccount,
          { input: accountInput, }
        )
      );

      let response: AuthResponse = { isOk: true, data: accountRes };

      this.isLoading = false;
      return response;

    } catch (error: any) {
      let response: AuthResponse = { isOk: false, data: null, message: undefined };

      console.log({ error });

      switch (error.code) {
        case "UsernameExistsException": { response.message = 'El correo electrónico ya esta en uso.'; break; }
        default: response.data = error;
      }

      this.isLoading = false;
      return new Promise<AuthResponse>((resolve, reject) => resolve(response));
    }

    // this.isLoading = true;
    // const waitSeconds = 1000 * 3;
    // setTimeout(() => { this.isLoading = false; }, waitSeconds);
    // return new Promise<AuthResponse>((resolve, reject) => {
    //   setTimeout(() => {
    //     const res: AuthResponse = { isOk: false };
    //     resolve(res);
    //   }, 3000);
    // });

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
