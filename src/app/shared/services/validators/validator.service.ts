import { Injectable } from '@angular/core';
import { EmailCustomValidator } from './email.custom-validator';
import { CollegeNameCustomValidator } from './name.custom-validator';
import { PasswordCustomvalidator } from './password.custom-validator';
import { FullNameCustomValidator } from './full-name.custom-validator';
import { CollegeEnrollmentCustomValidator } from './college-enrollment.custom-validator';
import { CodeVerificationCustomValidator } from './code-verification.custom-validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  private _collegeEnrollmentCustomValidator: FullNameCustomValidator = new CollegeEnrollmentCustomValidator();
  private _collegeNameCustomValidator: CollegeNameCustomValidator = new CollegeNameCustomValidator();
  private _emailCustomValidator: EmailCustomValidator = new EmailCustomValidator();
  private _fullNameCustomValidator: FullNameCustomValidator = new FullNameCustomValidator();
  private _passwordCustomvalidator: PasswordCustomvalidator = new PasswordCustomvalidator();
  private _codeVerificationCustomValidator: CodeVerificationCustomValidator = new CodeVerificationCustomValidator();

  constructor() { }

  public get emailCustomValidator(): EmailCustomValidator {
    return this._emailCustomValidator;
  }

  public get passwordCustomvalidator(): PasswordCustomvalidator {
    return this._passwordCustomvalidator;
  }

  public get collegeNameCustomValidator(): CollegeNameCustomValidator {
    return this._collegeNameCustomValidator;
  }

  public get fullNameCustomValidator(): FullNameCustomValidator {
    return this._fullNameCustomValidator;
  }

  public get collegeEnrollmentCustomValidator(): CollegeEnrollmentCustomValidator {
    return this._collegeEnrollmentCustomValidator;
  }

  public get codeVerificationCustomValidator(): CodeVerificationCustomValidator {
    return this._codeVerificationCustomValidator;
  }

}
