import { Injectable } from '@angular/core';
import { CustomValidator } from './interfcaes';
import { EmailValidator } from './email.validator';
import { PasswordValidator } from './password.validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailValidator: CustomValidator;
  public passwordValidator: CustomValidator;

  constructor() {
    this.emailValidator = new EmailValidator();
    this.passwordValidator = new PasswordValidator();
  }

}
