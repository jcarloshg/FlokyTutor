import { Injectable } from '@angular/core';
import { EmailCustomValidator } from './email.custom-validator';
import { CollegeNameCustomValidator } from './name.custom-validator';
import { PasswordCustomvalidator } from './password.custom-validator';
import { FullNameCustomValidator } from './full-name.custom-validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  private _emailCustomValidator: EmailCustomValidator = new EmailCustomValidator();
  private _passwordCustomvalidator: PasswordCustomvalidator = new PasswordCustomvalidator();
  private _collegeNameCustomValidator: CollegeNameCustomValidator = new CollegeNameCustomValidator();
  private _fullNameCustomValidator: FullNameCustomValidator = new FullNameCustomValidator();

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


}
