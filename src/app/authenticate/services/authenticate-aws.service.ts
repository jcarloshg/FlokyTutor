import { Injectable } from '@angular/core';
import { Loading } from 'src/app/shared/services/loading';
import { Authenticate, AuthResponse, SignUpParams, LoginParams, ConfirmSignUpParams } from '../../../domain/useCases/authenticate.useCase.interface';
import { Account } from 'src/models';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createAccount } from 'src/graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAWSService extends Loading implements Authenticate {

  public IDTUTOR = 'sa;lkdjflas;kdjf;lkasdf';

  private _account: Account | null = null;
  private _loginParams: LoginParams | null = null;
  private _signUpParams: SignUpParams | null = null;
  private _confirmSignUpParams: ConfirmSignUpParams | null = null;

  constructor() {
    super();
  }


  //============================================================
  // access to data from this service
  //============================================================
  public get account() { return this._account; }
  public get signUpParams() { return this._signUpParams; }
  public get loginParams() { return this._loginParams; }


  //============================================================
  // log-in
  //============================================================
  async signIn(loginParams: LoginParams): Promise<AuthResponse> {

    this.isLoading = true;
    this._loginParams = loginParams;

    try {

      // get
      const user = await Auth.signIn(
        loginParams.username,
        loginParams.password
      );

      // get
      this.IDTUTOR = user.username;
      console.log(this.IDTUTOR);


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


  //============================================================
  // sing-up
  //============================================================
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

  public async getCurrent() {
    try {
      const currentSessionResponse = await Auth.currentSession();
      console.log({ currentSessionResponse });
    } catch (error) {
      console.log({ error });
    }
  }

  signOut(): Promise<AuthResponse> {
    throw new Error('Method not implemented.');
  }
}
