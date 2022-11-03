import { Injectable } from '@angular/core';
import { CustomValidator } from './interfcaes';
import { EmailValidator } from './email.validator';
import { PasswordValidator } from './password.validator';
import { NameValidator } from './name.validator';
import { CollageEnrollmenValidator } from './collageEnrollment.validator';
import { CollegeNameValidator } from './collegeName.validator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public emailValidator: CustomValidator;
  public passwordValidator: CustomValidator;
  public nameValidator: CustomValidator;
  public collageEnrollment: CustomValidator;
  public collegeNameValidator: CustomValidator;

  constructor() {
    this.emailValidator = new EmailValidator();
    this.passwordValidator = new PasswordValidator();
    this.nameValidator = new NameValidator();
    this.collageEnrollment = new CollageEnrollmenValidator();
    this.collegeNameValidator = new CollegeNameValidator();
  }

}
