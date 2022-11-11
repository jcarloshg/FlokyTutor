import { Injectable } from '@angular/core';
import { EmailCustomValidator } from './email.custom-validator';
import { NameCustomValidator } from './name.custom-validator';
import { PasswordCustomvalidator } from './password.custom-validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  private _emailCustomValidator: EmailCustomValidator = new EmailCustomValidator();
  private _passwordCustomvalidator: PasswordCustomvalidator = new PasswordCustomvalidator();
  private _nameCustomValidator: NameCustomValidator = new NameCustomValidator();

  constructor() { }

  public get emailCustomValidator(): EmailCustomValidator {
    return this._emailCustomValidator;
  }

  public get passwordCustomvalidator(): PasswordCustomvalidator {
    return this._passwordCustomvalidator;
  }

  public get nameCustomValidator(): NameCustomValidator {
    return this._nameCustomValidator
  }


}
