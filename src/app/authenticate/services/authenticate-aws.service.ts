import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { Loading } from 'src/app/shared/services/loading';
import {
  Authenticate,
  AuthResponse,
  ConfirmSignUpParams,
  LoginParams,
  SignUpParams,
} from '../../../domain/useCases/authenticate.useCase.interface';
import { Account } from 'src/models';
import { createAccount } from 'src/graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAWSService extends Loading implements Authenticate {

  private _userTutorCurrent: Account | null = null;
  private _loginParams: LoginParams | null = null;
  private _signUpParams: SignUpParams | null = null;
  private _confirmSignUpParams: ConfirmSignUpParams | null = null;

  constructor() {
    super();
    (
      async () => {
        await DataStore.start();
      }
    )();
  }

  public get signUpParams() { return this._signUpParams; }
  public get loginParams() { return this._loginParams; }


  public async signIn(loginParams: LoginParams): Promise<AuthResponse> {

    this.isLoading = true;
    this._loginParams = loginParams;

    try {

      const user = await Auth.signIn(
        loginParams.username,
        loginParams.password
      );

      this.isLoading = false;
      return { isOk: true, message: '¡Hola, bienvenido tutor! :)' }

    } catch (error: any) {
      console.log(error);
      this.isLoading = false;
      switch (error.code) {
        case 'NotAuthorizedException': return { isOk: false, message: 'El correo electrónico o contraseña son incorrectos.' }
        default: return { isOk: false, message: 'No se pudo iniciar sesión.' }
      }
    }
  }

  async signUp(signUpParams: SignUpParams): Promise<AuthResponse> {

    this.isLoading = true;
    this._signUpParams = signUpParams;

    try {

      const signUpResposne = await Auth.signUp({
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

      const tutorID = signUpResposne.userSub;

      const newTutor = {
        id: tutorID,
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
            input: newTutor,
          },
        )
      );

      console.log({ accountRes });


      this.isLoading = false;
      return {
        isOk: true,
        data: signUpResposne,
      };

    } catch (error: any) {

      let messageErro = '';

      switch (error.code) {
        case "UsernameExistsException": messageErro = 'El correo electrónico ya esta en uso.'; break;
        default: messageErro = error;
      }

      this.isLoading = false;
      return {
        isOk: false,
        message: messageErro,
        data: error,
      }
    }

  }

  async confirmSignUp(confirmSignUpParams: ConfirmSignUpParams): Promise<AuthResponse> {

    this.isLoading = true;
    this._confirmSignUpParams = confirmSignUpParams;

    try {

      await Auth.confirmSignUp(
        confirmSignUpParams.email,
        confirmSignUpParams.code,
      );

      this.isLoading = false;
      return { isOk: true, message: 'Registro completado exitosamente. \n ¡Ahora eres parte de la familia Floky!' }
    } catch (error: any) {

      console.log({ ...error });
      this.isLoading = false;
      switch (error.code) {
        case "CodeMismatchException": return { isOk: false, message: 'Código invalido' }
        default: return { isOk: false, message: 'Se obtuvo un error inesperado :(' }
      }
    }
  }


  resendConfirmationCode(): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }

  async signOut(): Promise<AuthResponse> {
    try {
      const signOutResponse = await Auth.signOut();
      await DataStore.clear();
      return { isOk: true, data: signOutResponse };
    } catch (error) {
      const signOutResponse = await Auth.signOut();
      await DataStore.clear();
      return { isOk: true, data: signOutResponse };
    }
  }


  public async getCurrentTutor(): Promise<AuthResponse> {
    try {
      const existAnInstanceFromTutor = !(this._userTutorCurrent === null)
      if (existAnInstanceFromTutor == false) {
        const currentUser = await Auth.currentSession();
        const tutorID = currentUser.getAccessToken().payload['sub'].toString();
        const userTutorCurrent = await DataStore.query<Account>(Account, tutorID);

        console.log({ currentUser, userTutorCurrent });

        this._userTutorCurrent = userTutorCurrent ?? null;
      }
      return {
        isOk: this._userTutorCurrent ? true : false,
        data: this._userTutorCurrent,
      }
    } catch (error) {
      return { isOk: false, data: null, }
    }
  }
}
