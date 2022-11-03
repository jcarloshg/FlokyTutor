import { Injectable } from '@angular/core';
import { CustomValidator } from './interfcaes';
import { EmailValidator } from './email.validator';
import { PasswordValidator } from './password.validator';
import { NameValidator } from './name.validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailValidator: CustomValidator;
  public passwordValidator: CustomValidator;
  public nameValidator: CustomValidator;

  constructor() {
    this.emailValidator = new EmailValidator();
    this.passwordValidator = new PasswordValidator();
    this.nameValidator = new NameValidator();
  }

}
