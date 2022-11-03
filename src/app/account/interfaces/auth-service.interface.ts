
export interface Login {
    username: string,
    password: string,
}
export interface AccountSignUp {
    name: string;
    username: string;
    password: string;
    attributes: {
        email: string,
        name: string,
    }
}

export interface AuthService {
    login: Login,
    accountSignUp: AccountSignUp,
    confirmSignUp(): any;
    resendConfirmationCode(): any;
    signIn(login: Login): any;
    signOut(): any;
    signUp(accountSignUp: AccountSignUp): any;
}