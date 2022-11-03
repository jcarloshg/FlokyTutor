import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { Password } from './password';
import { Email } from './email';
import { Name } from './name';
import { CollageEnrollment } from './collageEnrollment';
import { CollegeName } from './collegeName';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  public getPasswordValidator(name: string, formBuilder: FormBuilder): Password {
    return new Password(name, formBuilder);
  }

  public getEmailValidator(name: string, formBuilder: FormBuilder): Email {
    return new Email(name, formBuilder);
  }

  public getNameValidator(name: string, formBuilder: FormBuilder): Name {
    return new Name(name, formBuilder);
  }

  public getCollegeEnrollment(name: string, formBuilder: FormBuilder): Name {
    return new Name(name, formBuilder);
  }

  public getCollageEnrollment(name: string, formBuilder: FormBuilder): CollageEnrollment {
    return new CollageEnrollment(name, formBuilder);
  }

  public getCollegeName(name: string, formBuilder: FormBuilder): CollegeName {
    return new CollegeName(name, formBuilder);
  }

}
