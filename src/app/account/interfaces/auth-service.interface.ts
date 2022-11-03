
export interface Login {
    username: string,
    password: string,
}

export interface AuthService {
    signIn(login: Login): any;
    signOut(): any;
    signUp(): any;
    confirmSignUp(): any;
    resendConfirmationCode(): any;
}