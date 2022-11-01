import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ValidatorsService } from '../../../shared/inputs/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailValidator.emailPattern)
      ]
    ],
    pass: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.passwordValidator.passwordPattern)
      ]
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
  ) {
    
  }

  showMessageFromFormControl(nameFormControl: string): boolean {
    const validFieldTouched = this.loginForm.get(nameFormControl)?.touched;
    const validFieldValid = this.loginForm.get(nameFormControl)?.valid;

    const isTouchedField = validFieldTouched ? true : false;
    const isValidField = validFieldValid ? true : false;

    if (isTouchedField === false) return false;
    if (isValidField === false) return true;

    return true;
  }

  getErrorMsgFromFormControl(nameFormControl: string): string | null {
    const errors = this.loginForm.get(nameFormControl)?.errors;
    if (errors == null || errors == undefined) return null;
    const errorMessage = this.validatorsService.emailValidator.getMessageError(errors);
    return errorMessage;
  }

  logIn() {
    // // console.log(this.loginForm.get('email')?.errors);
    // const loginFormControl = this.loginForm.get('email');
    // console.log(loginFormControl);

    // const loginValue = this.loginForm.get('email')
    // console.log(loginValue);

  }

}
