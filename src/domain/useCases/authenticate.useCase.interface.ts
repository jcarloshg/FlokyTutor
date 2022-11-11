import { EagerAccount } from "src/models";

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

export interface Authenticate {

    account: EagerAccount,

    // singIn
    login: Login;
    signIn(login: Login): Promise<AuthResponse>;

    // singUp
    accountSignUp: AccountSignUp;
    signUp(accountSignUp: AccountSignUp, account: EagerAccount): Promise<AuthResponse>;
    confirmSignUp(): Promise<AuthResponse>;
    resendConfirmationCode(): Promise<AuthResponse>;

    // reset pass
    // TODO - send code
    // TODO - confirm code && passs

    // view profile

    signOut(): Promise<AuthResponse>;

}
