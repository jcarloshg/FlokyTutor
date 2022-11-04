export interface AuthResponse {
    isOk: boolean,
    message?: string,
    data?: any
}
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
    confirmSignUp(): Promise<AuthResponse>;
    resendConfirmationCode(): Promise<AuthResponse>;
    signIn(login: Login): Promise<AuthResponse>;
    signOut(): Promise<AuthResponse>;
    signUp(accountSignUp: AccountSignUp): Promise<AuthResponse>;
}