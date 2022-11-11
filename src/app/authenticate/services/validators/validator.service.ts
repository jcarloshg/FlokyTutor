import { Injectable } from '@angular/core';
import { EmailCustomValidator } from './emailCustomValidator';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  private _emailCustomValidator: EmailCustomValidator = new EmailCustomValidator();

  constructor() { }

  public get emailCustomValidator(): EmailCustomValidator {
    return this._emailCustomValidator;
  }


}
