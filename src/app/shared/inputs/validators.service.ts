import { Injectable } from '@angular/core';
import { EmailValidator } from './email-input/email.validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailValidator: EmailValidator;

  constructor() {
    this.emailValidator = new EmailValidator();
  }

}
