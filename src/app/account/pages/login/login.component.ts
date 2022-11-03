import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';
import { CustomItemForm } from '../../interfaces/custom-item-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  private customItemsForm: Map<string, CustomItemForm> = new Map<string, CustomItemForm>();
  loginForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
  ) {

    const emailItemForm: CustomItemForm = {
      name: 'email',
      customValidator: this.validatorsService.emailValidator,
      formControl: this.formBuilder.control(
        '',
        this.validatorsService.emailValidator.getValidators()
      )
    }

    const passItemForm: CustomItemForm = {
      name: 'pass',
      customValidator: this.validatorsService.passwordValidator,
      formControl: this.formBuilder.control(
        '',
        this.validatorsService.passwordValidator.getValidators()
      )
    }

    this.customItemsForm.set(emailItemForm.name, emailItemForm);
    this.customItemsForm.set(passItemForm.name, passItemForm);

    this.loginForm.addControl(emailItemForm.name, emailItemForm.formControl);
    this.loginForm.addControl(passItemForm.name, passItemForm.formControl);

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

    const customValidator = this.customItemsForm.get(nameFormControl)?.customValidator;
    const errorMessage = customValidator!.getMessageError(errors);

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
