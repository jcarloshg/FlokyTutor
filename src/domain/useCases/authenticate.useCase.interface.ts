import { Role } from "src/models";

export interface Authenticate {

    // singIn
    signIn(loginParams: LoginParams): Promise<AuthResponse>;
    getInfoUserLogged(): Promise<AuthResponse>;

    // singUp
    signUp(signUpParams: SignUpParams): Promise<AuthResponse>;
    confirmSignUp(confirmSignUpParams: ConfirmSignUpParams): Promise<AuthResponse>;
    resendConfirmationCode(): Promise<AuthResponse>;

    // reset pass
    // TODO - send code
    // TODO - confirm code && passs

    // view profile

    signOut(): Promise<AuthResponse>;

}

export interface AuthResponse {
    isOk: boolean,
    message?: string,
    data?: any
}

export interface LoginParams {
    username: string,
    password: string,
}

export interface SignUpParams {
    fullName: string,
    collegeName: string,
    collegeEnrollment: string,
    role: Role,
    email: string,
    pass: string,
}
export interface ConfirmSignUpParams {
    email: string,
    code: string,
}