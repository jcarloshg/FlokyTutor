import { Injectable } from '@angular/core';
import { EmailValidator } from './email-input/email.validator';
import { PasswordValidator } from './password-input/password.validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailValidator: EmailValidator;
  public passwordValidator: PasswordValidator;

  constructor() {
    this.emailValidator = new EmailValidator();
    this.passwordValidator = new PasswordValidator();
  }

}
